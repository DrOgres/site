import DeckBox from "./DeckBox";
import Tutorial from "./Tutorial";
import ContactForm from "./ContactForm";
import Home from "./Home";
import About from "./About";

/**
 * @description The main component rendered at site index with anchors for the nav links.
 *
 * @returns The full html template for the main page.
 */

const Content = () => {
  return (
    <>
      <Home />

      <section className='work auto-center' id='work'>
        <h2>Projects</h2>
        <DeckBox />
      </section>

      <section className='tutorial auto-center vh100' id='tutorial'>
        <div className='content flex-col wrap'>
          
            <h2>Tutorials</h2>
          
          <Tutorial />
        </div>
      </section>
      <section className='about auto-center vh100' id='about'>
        <div className='content'>
          <div className='section-head flex-col'>
            <h2>A bit about me</h2>
          </div>
          <About />
        </div>
      </section>
      <section className='contact auto-center vh100' id='contact'>
        <div className='content'>
          <div className='section-head flex-col'>
            <h2>Contact</h2>
          </div>
          <div className='crt card glow-border'>
            <div className="about-group">
            <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
