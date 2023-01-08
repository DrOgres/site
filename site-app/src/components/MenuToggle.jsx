import React from 'react';

/**
 * @description toggles the aria-expanded state which is used by the css to set the correct SVG
 * as well as toggle the visiblity of the menu.
 */

const MenuToggle = (props) => {
  

    return (
      <div className="banner-outside">
        <button
          aria-controls="navigation"
          aria-expanded={props.menuVisibility}
          className="hamburger banner-inside"
          
          onClick={props.handleMouseDown}
          type="button"

        >
          <span className="sr-only">Menu</span>
        </button>
      </div>
    );
  }


export default MenuToggle;
