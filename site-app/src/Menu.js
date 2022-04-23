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
           >
            <li className="nav-item">
                <a href="#home" className="btn">home</a>
            </li>
            <li className="nav-item">
                <a href="#work" className="btn">work</a>
            </li>

            <li className="nav-item" >
                <a href="#about" className="btn">about</a>
            </li>

            <li className="nav-item" >
                <a href="#contact" className="btn">contact</a>
            </li>
            </ul>
            </nav>
        );
    }
}

export default Menu;