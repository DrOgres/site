
import './App.css';
import ContactForm from "./ContactForm";

import MenuContainer from './MenuContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header flex-col justify-start">
       
        <MenuContainer />
      </header>
      <div className="container flex-col">
        <section className="home auto-center" id="home">

            <div className="content rotated flex-col">
                <h1 className="medalion">Dr.<br />Ogres</h1>
                <div className="flex-row center nowrap ">
                    <div className="quote-text grow nowrap" id="witty-quote-container">
                    </div>
                </div>
            </div>
        </section>
        <div className="break-1"></div>
        <section className="work auto-center" id="work">
            <div className="content flex-row wrap gap">
                <div className="section-head flex-col">
                    <h2>Work</h2>
                    <h3>Client: Free League Publishing</h3>
                </div>

                <div className="card hero flex-col">
                    <img src="https://raw.githubusercontent.com/fvtt-fria-ligan/vaesen-foundry-vtt/master/asset/screen_shot.png"
                        alt="vaesen screen shot" width='100%' />
                    <div className="card-content">
                        <h2>Vaesen system for Foundry VTT</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores
                            dolorem beatae nisi libero ullam voluptatem, expedita alias, minus cupiditate a amet
                            suscipit
                            perferendis similique? Accusantium dignissimos voluptatem culpa iusto!</p>
                    </div>
                </div>
                <div className="card side-kick flex-col">
                    <img src="https://raw.githubusercontent.com/fvtt-fria-ligan/vaesen-foundry-vtt/master/asset/screen_shot.png"
                        alt="vaesen screen shot" width="70%" />
                    <div className="card-content">
                        <h3>A secondary Card</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores
                            dolorem beatae nisi libero ullam voluptatem, expedita alias, minus cupiditate a amet
                            suscipit perferendis similique? Accusantium dignissimos voluptatem culpa iusto!</p>
                    </div>
                </div>
                <div className="card side-kick flex-col">
                    <img src="https://raw.githubusercontent.com/fvtt-fria-ligan/vaesen-foundry-vtt/master/asset/screen_shot.png"
                       alt="vaesen screen shot" width="70%" />
                    <div className="card-content">
                        <h3>A secondary Card</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores
                            dolorem beatae nisi libero ullam voluptatem, expedita alias, minus cupiditate a amet
                            suscipit perferendis similique? Accusantium dignissimos voluptatem culpa iusto!</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="break-2"></div>
        <section className="about auto-center" id="about">
            <div className="content">
                <div className="section-head flex-col">
                    <h2>A bit about me</h2>
                    <h3>Ask me about music and cheese.</h3>
                </div>
            </div>
        </section>
      <div className="break-3"></div>
        <section className="contact auto-center" id="contact">
            <div className="content">
                <div className="section-head flex-col">
                    <h2>Contact</h2>
                    <h3>I would love to talk about your project!</h3>
                    <div className="py-6">
                      <ContactForm />
                    </div>
                </div>
                </div>
        </section>
    </div>
    </div>
  );
}

export default App;
