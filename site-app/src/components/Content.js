
import DeckBox from "./DeckBox";
import ContactForm from "./ContactForm";


/**
 * @description The main component rendered at site index with anchors for the nav links.  
 * 
 * @returns The full html template for the main page.
 */


const Content = () => {

    return (
        <>

            <section className="home auto-center" id="home">

                <div className="content rotated flex-col">
                    <h1 className="medalion">Dr.<br />Ogres</h1>
                    <div className="flex-row center nowrap ">
                        <div className="quote-text grow nowrap" id="witty-quote-container">
                        </div>
                    </div>
                </div>
            </section>
            <div className="break-1" id="work"></div>
            <section className="work auto-center">
                <div className="content flex-row wrap gap">
                    <div className="section-head flex-col">
                        <h2>Work</h2>
                        <h3>Client: Free League Publishing</h3>
                    </div>
                    <DeckBox />
                </div>
            </section>
            <div className="break-2" id="about"></div>
            <section className="about auto-center">
                <div className="content">
                    <div className="section-head flex-col">
                        <h2>A bit about me</h2>
                        <h3>Ask me about music and cheese.</h3>
                    </div>
                    <div className='blog-block glow-border'>
                        <h4>Code</h4>
                        <p className='blog-text'>I've been coding since I was a wee tot. I enjoy the problem solving aspects of it and there is just nothing like the rush when a thing starts doing what you told it to.</p>
                        <p className='blog-text'>I am good with a fair number of languages and keep up to date with many modern toolsets, learing a new API is my idea of a great weekend.</p>
                        <p className='blog-text'>You can see some of the <a href="#work">projects</a> I have worked on above. Most recently I have been working with Free League Publishing on converting thier Vaesen and Tales from the Loop game books to Foundry VTT modules. The process of taking a beautifully designed book and capturing the same look and feel in code has been a fun challenge.</p>
                        <h4>Art</h4>
                        <p className='blog-text'>I draw and paint both with both digital and traditional media. A pencil to paper is a great way to get the old brain in motion.  I went to school for Fine Art, Illustration and Animation.</p>
                        <p className='blog-text'>You might think that art and code don't have much in the way of overlap but I would argue that sketching UI/UX elements and thinking through a project as a visual puzzle is key to making things that are useful and useable</p>
                        <h4>Music</h4>
                        <p className='blog-text'>I have often said that music is perhaps the most important thing humans have ever achieved. That bit of hyperbole is my way of saying: "Boy howdy I love me some tunes."</p>
                        <p className='blog-text'>That is to say that whether it's making it with my band or listening to it on the turntable my day is filled with beautiful sound. I love finding new music and can be found digging through the deep recesses of bandcamp fairly often.</p>
                    </div>
                </div>
            </section>
            <div className="break-3" id="contact"></div>
            <section className="contact auto-center" >
                <div className="content">
                    <div className="section-head flex-col">
                        <h2>Contact</h2>
                        <h3>I would love to hear about your project!</h3>
                    </div>
                    <div className="form-container flex-col nowrap gap glow-border">
                        <ContactForm />
                    </div>

                </div>
            </section>


        </>

    );

}

export default Content;