import { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./store/context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "#FFFFFF" : "#222",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <PortfolioList />
      <Contact />
    </div>
  );
};

export default App;
