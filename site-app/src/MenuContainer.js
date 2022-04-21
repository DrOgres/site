import React, { Component } from "react";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";


class MenuContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {

        this.setState({
            visible: !this.state.visible
        });
    }

    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }


    render() {
        return (
            <>
                <MenuToggle handleMouseDown={this.handleMouseDown} 
                    menuVisibility={this.state.visible} />
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
            </>
        );
    }
}

export default MenuContainer;