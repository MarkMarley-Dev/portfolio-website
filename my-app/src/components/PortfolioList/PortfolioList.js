import "./styles.css";
import Portfolio from "../Portfolio/Portfolio";
import { Portfolios } from "../../data/data";

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Portfolio Projects</h1>
        <p className="pl-desc">
          Built within Reactjs, SASS, Nodejs, HTML, CSS.
          <br /> Feel free to click to be taken to the live website or Git Repo.
        </p>
      </div>
      <div className="pl-list">
        {Portfolios.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
