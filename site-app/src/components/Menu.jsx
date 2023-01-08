import React from "react";
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

//TODO close menu when link is clicked or when user clicks outside of menu

const Menu = (props) =>  {

    return (
      <nav className="flex-row items-center justify-start">
        <ul
          className="nav-list flex-row items-center justify-start "
          id="navigation"
          data-visible={props.menuVisibility}
        >
         
          <li className="nav-item"  onClick={props.handleMouseDown}  >
            <NavLink 
            to="/#work" 
            className="nav-link  ul-link-l-to-r"
           
            >
              projects
            </NavLink>
          </li>

          <li className="nav-item" onClick={props.handleMouseDown} >
            <NavLink
              to="/#tutorial"
              className="nav-link  ul-link-l-to-r"
            
            >
              tutorials
            </NavLink>
          </li>

          <li className="nav-item" onClick={props.handleMouseDown} >
            <NavLink
              to="/#about"
              className="nav-link  ul-link-l-to-r"
            
            >
              about
            </NavLink>
          </li>

          <li className="nav-item" onClick={props.handleMouseDown} >
            <NavLink
              to="/#contact"
              className="nav-link  ul-link-l-to-r"
             
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }


export default Menu;
