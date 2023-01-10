import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="site-header" id="header">
      <div className="home" id="home">
        <h1 className="rotated medalion">
          Dr.
          <br />
          Ogres
        </h1>

        <div className="subtitle">
          <h3>Code - Design - Music - Art</h3>
        </div>
        <div className="navigation flex-col">
          <p className="link-info">
          <NavLink 
            to="/#work" 
            className="site-link ul-link-l-to-r"
           
            >
              projects
            </NavLink>
            <span> I've worked on</span>
          </p>
          <p className="link-info">
            <span>Some </span>
            <NavLink to="/#tutorial" className="site-link">Tutorials</NavLink>
            <span> for you</span>
          </p>
          <p className="link-info">
            <span>A Little </span>
            <NavLink to="/#about" className="site-link">About</NavLink>
            <span> me and my skills</span>
          </p>
          <p className="link-info">
            <span>An easy way to </span>
            <NavLink to="/#contact" className="site-link">Contact</NavLink>
            <span> me</span>
          </p>
          <div className="auto-center margin-top-sm">
          <a href={"https://github.com/DrOgres"} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSquareGithub} className={"site-link"} /></a>{" "}
          <a href={"https://www.linkedin.com/in/david-rogers-122bb04/"} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className={"site-link"} /></a>
          </div>
        </div>
        <div className="oni">
          <img src="assets/oni-4.svg" alt="oni" />
        </div>
      </div>
    </section>
  );
}
