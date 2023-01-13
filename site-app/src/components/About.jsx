import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faFigma,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div className='deck-box'>
      
        <div className='about-group'>
          <h4>
            TLDR;{" "}
            <a
              href='/assets/David Rogers - Resume - Front End Developer.pdf'
              download
              target={"_blank"}
            >
              Resume{" "}
              <FontAwesomeIcon
                icon={faFilePdf}
                size='2x'
                title='download a PDF copy of my resume'
              />
            </a>
          </h4>
          <h4>Code</h4>
          <h4 className='blog-text'>
            TLDR; <FontAwesomeIcon icon={faHtml5} size='2x' title='HTML 5' />
            <FontAwesomeIcon icon={faCss3Alt} size='2x' title='CSS 3' />{" "}
            <FontAwesomeIcon icon={faSass} size='2x' title='SASS' />{" "}
            <FontAwesomeIcon icon={faJsSquare} size='2x' title='JavaScript' />{" "}
            <FontAwesomeIcon icon={faReact} size='2x' title='React' />{" "}
            <FontAwesomeIcon icon={faNodeJs} size='2x' title='Node.js' />
          </h4>
          <div
            className='short-block'
            id='code-text'
            onClick={() => {
              document
                .getElementById("code-text")
                .classList.toggle("long-block");
              document
                .getElementById("code-text")
                .classList.toggle("short-block");
            }}
          >
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
          <h4>Design</h4>
          <h4 className='blog-text'>
            TLDR; <FontAwesomeIcon icon={faFigma} size='2x' title='Figma' />{" "}
          </h4>
          <div
            className='short-block'
            id='design-text'
            onClick={() => {
              document
                .getElementById("design-text")
                .classList.toggle("long-block");
              document
                .getElementById("design-text")
                .classList.toggle("short-block");
            }}
          >
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
          <h4>Art</h4>

          <div
            className='short-block'
            id='art-text'
            onClick={() => {
              document
                .getElementById("art-text")
                .classList.toggle("long-block");
              document
                .getElementById("art-text")
                .classList.toggle("short-block");
            }}
          >
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
          <div
            className='short-block'
            id='music-text'
            onClick={() => {
              document
                .getElementById("music-text")
                .classList.toggle("long-block");
              document
                .getElementById("music-text")
                .classList.toggle("short-block");
            }}
          >
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
  );
}
