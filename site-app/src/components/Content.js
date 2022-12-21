import DeckBox from "./DeckBox";
import Tutorial from "./Tutorial";
import ContactForm from "./ContactForm";
import Quotes from "./Quotes";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import ScrollOut from "scroll-out";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faFigma,
  faGithub,
  faLinkedin,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

// TODO - redo about section - add a tldr list of skills at the top

/**
 * @description The main component rendered at site index with anchors for the nav links.
 *
 * @returns The full html template for the main page.
 */

const Content = () => {
  Splitting({
    /* target: String selector, Element, Array of Elements, or NodeList */
    target: "[data-splitting]",
    /* by: String of the plugin name */
    by: "chars",
    /* key: Optional String to prefix the CSS variables */
    key: null,
  });
  ScrollOut({
    targets: "[data-splitting]",
  });
  return (
    <>
      <section className='home auto-center grid col-auto-flow align-items-center gap' id='home'>
        <div className="content"> <h2>Projects Tutorials About Contact</h2></div>
        <div className='content rotated flex-col '>
          <h1 data-splitting className='medalion'>
            Dr.
            <br />
            Ogres
          </h1>
          <Quotes />
          <div className='flex-row center nowrap '>
            <div
              className='quote-text grow nowrap'
              id='witty-quote-container'
            ></div>
          </div>
        </div>
      </section>
      <div className='break-1' id='work'></div>
      <section className='work auto-center'>
        <div className='content flex-row wrap gap'>
          <div className='section-head flex-col'>
            <h2 data-splitting>Projects</h2>
            <h3 data-splitting>
              Personal and Professional maybe your project next!
            </h3>
          </div>
          <DeckBox />
        </div>
      </section>
      <div className='break-2' id='tutorial'></div>
      <section className='tutorial auto-center'>
        <div className='content flex-row wrap gap'>
          <div className='section-head flex-col'>
            <h2 data-splitting>Tutorials</h2>
            <h3 data-splitting>How to's and code snippets for you to use!</h3>
          </div>
          <Tutorial />
        </div>
      </section>
      <div className='break-3' id='about'></div>
      <section className='about auto-center'>
        <div className='content'>
          <div className='section-head flex-col'>
            <h2 data-splitting>A bit about me</h2>
            <h3 data-splitting>Ask me about music and cheese.</h3>
          </div>
          <div className='crt blog-block'>
            <h4 data-splitting>TLDR; <a  href="/assets/David Rogers - Resume - Front End Developer.pdf" download target={"_blank"}>Resume <FontAwesomeIcon icon={faFilePdf} size='2x' title="download a PDF copy of my resume" /></a></h4>
            <h4 data-splitting>Code</h4>
            <h4 className='blog-text'>
              TLDR; <FontAwesomeIcon icon={faHtml5} size='2x' title='HTML 5' />
              <FontAwesomeIcon icon={faCss3Alt} size='2x' title='CSS 3' />{" "}
              <FontAwesomeIcon icon={faSass} size='2x' title='SASS' />{" "}
              <FontAwesomeIcon icon={faJsSquare} size='2x' title='JavaScript' />{" "}
              <FontAwesomeIcon icon={faReact} size='2x' title='React' />{" "}
              <FontAwesomeIcon icon={faNodeJs} size='2x' title='Node.js' />
            </h4>
            <div className="short-block" id="code-text" onClick={()=>{
              document.getElementById("code-text").classList.toggle("long-block");
              document.getElementById("code-text").classList.toggle("short-block");
            }}>
            <p className='blog-text'>
              I've been coding since I was a wee tot. I enjoy the problem
              solving aspects of it and there is just nothing like the rush when
              a thing starts doing what you told it to.
            </p>
            <p className='blog-text'>
              I am good with a fair number of languages and keep up to date with
              many modern toolsets, learing a new API is my idea of a great
              weekend.
            </p>
            <p className='blog-text'>
              You can see some of the{" "}
              <a className='ul-link-l-to-r blog-link' href='#work'>
                projects
              </a>{" "}
              I have worked on above. Most recently I have been working with
              Free League Publishing on converting thier Vaesen and Tales from
              the Loop game books to Foundry VTT modules. The process of taking
              a beautifully designed book and capturing the same look and feel
              in code has been a fun challenge.
            </p>
            </div>
            <h4 data-splitting>Design</h4>
            <h4 className='blog-text'>
              TLDR; <FontAwesomeIcon icon={faFigma} size='2x' title='Figma' />{" "}
            </h4>
            <div className="short-block" id="design-text" onClick={()=>{
              document.getElementById("design-text").classList.toggle("long-block");
              document.getElementById("design-text").classList.toggle("short-block");
            }}>
            <p className='blog-text'>
              From simple and modern to complex and ornate I have a good eye for
              design. I have worked with a number of clients to create logos,
              websites, and other digital assets.
            </p>
            <p className='blog-text'>
              I like to start on paper with a pencil but I am also comfortable
              with digital tools like Figma and Adobe XD.
            </p>
            </div>
            <h4 data-splitting>Art</h4>
            
            <div className="short-block" id="art-text" onClick={()=>{
              document.getElementById("art-text").classList.toggle("long-block");
              document.getElementById("art-text").classList.toggle("short-block");
            }}>
            <p className='blog-text'>
              I draw and paint both with both digital and traditional media. A
              pencil to paper is a great way to get the brain in motion. I went
              to school for Fine Art, Illustration and Animation.
            </p>
            <p className='blog-text'>
              You might think that art and code don't have much in the way of
              overlap but I would argue that sketching UI/UX elements and
              thinking through a project as a visual puzzle is key to making
              things that are useful and useable
            </p>
            </div>
           
            <h4 data-splitting>Music</h4>
            <div className="short-block" id="music-text" onClick={()=>{
              document.getElementById("music-text").classList.toggle("long-block");
              document.getElementById("music-text").classList.toggle("short-block");
            }}>
            <p className='blog-text'>
              I have often said that music is perhaps the most important thing
              humans have ever achieved. That bit of hyperbole is my way of
              saying: "Boy howdy I love me some tunes."
            </p>
            <p className='blog-text'>
              That is to say that whether it's making it with my band or
              listening to it on the turntable my day is filled with beautiful
              sound. I love finding new music and can be found digging through
              the deep recesses of bandcamp fairly often.
            </p>
            </div>
          </div>
        </div>
      </section>
      <div className='break-2' id='contact'></div>
      <section className='contact auto-center'>
        <div className='content'>
          <div className='section-head flex-col'>
            <h2 data-splitting>Contact</h2>
            <h3 data-splitting>I would love to hear about your project!</h3>
          </div>
          <div className='crt form-container flex-col nowrap gap glow-border'>
            <ContactForm />
          </div>
        </div>
      </section>

      <svg width='0' height='0'>
        <defs>
          <clipPath id='myCurve' clipPathUnits='objectBoundingBox'>
            <path
              d='M 0, 0.8
            L 0, 0
            L 1, 0
            L 1, 0.8
            C 0.65 1, 0.35 1, 0 0.8
									Z'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Content;
