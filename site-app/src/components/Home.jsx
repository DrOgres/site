import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section className="site-header">
      <div className="mask">
        <div className="home content" id="home">
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
              <span className="site-link">Projects</span>
              <span > I've worked on</span>
            </p>
            <p className="link-info">
              <span>Some </span>
              <span className="site-link">Tutorials</span>
              <span> for you</span>
            </p>
            <p className="link-info">
            <span>A Little </span>
              <span className="site-link">About</span>
              <span> me and my skills</span>
            </p>
            <p className="link-info">
            <span>An easy way to </span>
              <span className="site-link">Contact</span>
              <span> me</span>
            </p>
            <div className="auto-center margin-top-sm">
              <FontAwesomeIcon icon={faGithub} className={"site-link"} />{" "}
              <FontAwesomeIcon icon={faLinkedin} className={'site-link'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
