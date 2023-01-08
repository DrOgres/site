import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";

/**
 * @description Holds the Menu and the Menu toggle and handles all the logic to show/hide
 * the menu when the hamburger is visible.  the state here is used by
 * the menu and the toggle the visible state in those components.
 *
 */

const MenuContainer = (props) => {
  
  const [visible, setVisible] = useState(false);

  function handleMouseDown(e) {
    e.preventDefault(); 
    setVisible(!visible);
  }


    return (
      <>
        <MenuToggle
          handleMouseDown={handleMouseDown}
          menuVisibility={visible}
          scrollPos={props.scrollPos}
        />
        <Menu
          handleMouseDown={handleMouseDown}
          menuVisibility={visible}
        />
      </>
    );
  }


export default MenuContainer;
