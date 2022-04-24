import React, { Component } from "react";


class MenuToggle extends Component {
  render(){

    let visible = "false";

    if (this.props.menuVisibility){
        visible ="true";
    }

    return(
      <div className="banner-outside">
      <button aria-controls="navigation" aria-expanded={visible} className="hamburger banner-inside" 
         onMouseDown={this.props.handleMouseDown}>
          <span className="sr-only">Menu</span>
      </button>
      </div>
    );
  }
}

export default MenuToggle;