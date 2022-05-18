import { Component } from "react";
import { NavLink } from "react-router-dom";
// import { HashLink as AnchorLink } from "react-router-hash-link";

/**
 * @description Builds out the items and sets up the links for the navigation menu at the head of the
 * site.
 *
 *
 * visible is the state set for small screen sizes to toggle the menu when the hamburger is clicked
 * Logic for menu show/hide is found in MenuContainer.js and is tied to the MenuToggle.js which
 * handles the hamburger.
 *
 */

class Menu extends Component {
  render() {
    let visible = "false";
    // let activeClassName="selected"
    // let activeStyle = {
    //   textDecoration: "underline",
    // };

    if (this.props.menuVisibility) {
      visible = "true";
    }

    return (
      <nav className="flex-row items-center justify-start">
        <ul
          className="nav-list flex-row items-center justify-start gap"
          id="navigation"
          data-visible={visible}
        >
          <li className="nav-item">
            <NavLink
              to="/#home"
              className="nav-link btn ul-link-l-to-r"
              
            >
              home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
            to="/#work" 
            className="nav-link btn ul-link-l-to-r">
              projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/#about"
              className="nav-link btn ul-link-l-to-r"
            
            >
              about
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/#contact"
              className="nav-link btn ul-link-l-to-r"
             
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
