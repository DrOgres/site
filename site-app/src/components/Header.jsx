/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuContainer from "./MenuContainer";

/**
 * @description A simple component to contain the navigation bar for the site should be
 * placed in the app above any changes to the route so that it always renders
 *
 * @returns An html template for the header section of the site
 */

const Header = (props) => {
  const article = document.getElementById("article");

  return (
    <>
      <header className='App-header flex-col justify-start'>
        <MenuContainer scrollPos={props.scrollPos}/>
      </header>

      <div className='top-button'>
        {
          /* visible only if scrillPos > 100  */
          //TODO animate the button to scale in and out
      

          props.scrollPos > 100 && (
            <div
              className='scroll-to-top'
              onClick={() => {
                article.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            > 
              <a href='#'>
                <svg width='32' height='32' viewBox='0 0 512 512'>
                  <path
                    stroke='#c62852'
                    strokeWidth='3'
                    d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm11.3-395.3l112 112c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H304v96c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V256H144c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l112-112c6.2-6.2 16.4-6.2 22.6 0z'
                    id='up-arrow'
                  />
                </svg>
              </a>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Header;
