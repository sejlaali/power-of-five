import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import './NavBurger.css'

class NavBurger extends Component {

    render() {
        return ( 
        <div>
                <Menu noOverlay right>
                <a className="menu-item" href="/">Home </a>
               <hr/>
                <a className="menu-item" href="/about-me">About Me</a>
                <hr/>
                <a className="menu-item" href="/projects">Projects</a>
                <hr/>
                <a className="menu-item" href="/contact-me">Contact Me</a>
                <hr/>
                </Menu>
        </div>
        );
    }
}

export default NavBurger;