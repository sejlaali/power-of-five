import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import './NavBurger.css'

class NavBurger extends Component {

    render() {
        return ( 
        <div className="menu">
                <Menu noOverlay pageWrapId={ "page-wrap" } right>
                <a className="menu-item" href="/">Collective Mood </a>
                <a className="menu-item" href="/about-me">Mood History</a>
                <a className="menu-item" href="/projects">Private Journal</a>
                <br />
                <br />
                <br />
                <br />
                <br />

                <a className="menu-item" href="/contact-me">Sign-Out</a>
                </Menu>
        </div>
        );
    }
}

export default NavBurger;