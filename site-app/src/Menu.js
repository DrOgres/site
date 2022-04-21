import React, { Component } from "react";


class Menu extends Component {

    render() {

        let visible = "false";

        if (this.props.menuVisibility){
            visible ="true";
        }

        return( 
        
            <nav className="flex-row items-center justify-start">
            <ul className="nav-list flex-row items-center justify-start gap" id="navigation" data-visible={visible}
            role="list">
            <li className="nav-item" role="listitem">
                <a href="#home" className="btn">home</a>
            </li>
            <li className="nav-item" role="listitem">
                <a href="#work" className="btn">work</a>
            </li>

            <li className="nav-item" role="listitem">
                <a href="#about" className="btn">about</a>
            </li>

            <li className="nav-item" role="listitem">
                <a href="#contact" className="btn">contact</a>
            </li>
            </ul>
            </nav>
        );
    }
}

export default Menu;