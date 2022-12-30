import MenuContainer from "./MenuContainer";

/**
 * @description A simple component to contain the navigation bar for the site should be
 * placed in the app above any changes to the route so that it always renders
 *
 * @returns An html template for the header section of the site
 */

//TODO add a button to scroll to the top of the page which is only visible when the user has scrolled down the page more
// than 50% of the height of the page
const Header = (props) => {
  const article = document.getElementById("article");

  return (
    <>
      <header className="App-header flex-col justify-start">
        <MenuContainer />
      </header>

      <div>
        {" "}
        {
          /* visible only if scrillPos > 100  */
          //TODO animate the button to scale in and out
          //TODO style the button
          
          props.scrollPos > 100 && (
            <button
              onClick={() =>
                article.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Scroll to top
            </button>
          )
        }
      </div>
    </>
  );
};

export default Header;
