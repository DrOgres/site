import { Component } from "react";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";

/**
 * @description Holds the Menu and the Menu toggle and handles all the logic to show/hide
 * the menu when the screensize makes the hamburger visible.  the state here is used by 
 * the menu and the toggle the visible state in those components.
 * 
 */

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