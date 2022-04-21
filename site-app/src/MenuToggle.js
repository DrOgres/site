import React, { Component } from "react";


class MenuToggle extends Component {
  render(){

    let visible = "false";

    if (this.props.menuVisibility){
        visible ="true";
    }

    return(
      <button aria-controls="navigation" aria-expanded={visible} className="hamburger" 
         onMouseDown={this.props.handleMouseDown}>
          <span className="sr-only">Menu</span>
      </button>
    );
  }
}

export default MenuToggle;