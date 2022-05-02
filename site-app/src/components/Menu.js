import { Component } from "react";
import { HashLink as AnchorLink } from 'react-router-hash-link';

/**
 * @description Builds out the items and sets up the links for the navigation menu at the head of the
 * site.  
 * 
 * note the AnchorLink items always link to site root and the anchor on that path.  
 * 
 * visible is the state set for small screen sizes to toggle the menu when the hamburger is clicked
 * Logic for menu show/hide is found in MenuContainer.js and is tied to the MenuToggle.js which
 * handles the hamburger.
 * 
 */

class Menu extends Component {

    render() {

        let visible = "false";

        if (this.props.menuVisibility){
            visible ="true";
        }

        return( 
        
            <nav className="flex-row items-center justify-start">
            <ul className="nav-list flex-row items-center justify-start gap" id="navigation" data-visible={visible}
           >
            <li className="nav-item">
                <AnchorLink to="/#home" className="btn">home</AnchorLink>
            </li>
            <li className="nav-item">
                <AnchorLink to="/#work" className="btn">work</AnchorLink>
            </li>

            <li className="nav-item" >
                <AnchorLink to="/#about" className="btn">about</AnchorLink>
            </li>

            <li className="nav-item" >
                <AnchorLink to="/#contact" className="btn">contact</AnchorLink>
            </li>
            </ul>
            </nav>
        );
    }
}

export default Menu;