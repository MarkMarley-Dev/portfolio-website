import "./styles.css";
import Award from "../../assets/brainstation-diploma.png";
import Skyline from "../../assets/address.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Skyline} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name is Mark Marley. I am junior full-stack web developer with a
          focus on the frontend with React
        </p>
        <p className="a-desc">
          Currently looking for work in frontend roles but open to full-stack
          roles with interesting projects. I have experience coding in
          Reactjs(Hooks & Redux), JavaScript, Sass, Nodejs, CSS, HTML with some
          experience in Nextjs, PHP & MySQL.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Brainstation Diploma </h4>
            <p className="a-award-desc">
              Attached is My Brainstation Web Development Diploma attained in
              2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
