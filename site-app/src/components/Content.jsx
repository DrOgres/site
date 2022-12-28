import DeckBox from "./DeckBox";
import Tutorial from "./Tutorial";
import ContactForm from "./ContactForm";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import ScrollOut from "scroll-out";
import Home from "./Home";
import About from "./About";



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
      <Home />
     
      <section className='work auto-center' id="work">
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

      <section className='tutorial auto-center' id="tutorial">
        <div className='content flex-row wrap gap'>
          <div className='section-head flex-col'>
            <h2 data-splitting>Tutorials</h2>
            <h3 data-splitting>How to's and code snippets for you to use!</h3>
          </div>
          <Tutorial />
        </div>
      </section>
      <section className='about auto-center' id="about">
        <div className='content'>
          <div className='section-head flex-col'>
            <h2 data-splitting>A bit about me</h2>
            <h3 data-splitting>Ask me about music and cheese.</h3>
          </div>
          <About />
        </div>
      </section>
      <section className='contact auto-center' id="contact">
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
