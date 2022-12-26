export default function Home() {
  return (
    <section className="home" id="home">
      <div className="content auto-center">
        <h1 data-splitting className="rotated medalion">
          Dr.
          <br />
          Ogres
        </h1>
      </div>
      <div className="subtitle">
        <h3>Code - Design - Music - Art</h3>
      </div>
      <div className="navigation flex-col">
        
           <p className="link-info">
          <span className="site-link">Projects</span>
           <span>{" "}I've worked on</span>
          </p>
          <p className="link-info">
          <span className="site-link">Tutorials</span>
            <span>{" "}How to do stuff</span>
          </p>
          <p className="link-info">
          <span className="site-link">About</span>
            <span>{" "}My skills and stuff</span>
          </p>
          <p className="link-info">
          <span className="site-link">Contact</span>
            <span>{" "}Get in touch</span>
          </p>
       
      </div>
    </section>
  );
}
