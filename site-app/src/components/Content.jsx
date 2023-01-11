import DeckBox from "./DeckBox";

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
        <DeckBox group={"projects"} />
      </section>

      <section className='tutorial auto-center' id='tutorial'>
        <h2>Tutorials</h2>
        <DeckBox group={"tutorials"} />
      </section>
      <section className='about auto-center' id='about'>
        <h2>A bit about me</h2>
        <About />
      </section>
      <section className='contact auto-center' id='contact'>
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </>
  );
};

export default Content;
