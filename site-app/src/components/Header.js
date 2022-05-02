import MenuContainer from "./MenuContainer";

/**
 * @description A simple component to contain the navigation bar for the site should be
 * placed in the app above any changes to the route so that it always renders
 * 
 * @returns An html template for the header section of the site
 */

const Header = () => {
    return (

        <header className="App-header flex-col justify-start">

            <MenuContainer />
        </header>
    );
}

export default Header;

