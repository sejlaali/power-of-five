import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import './NavBurger.css'

class NavBurger extends Component {

    render() {
        return ( 
            <div className="nav-bar">
        <div className="menu">
                <Menu noOverlay pageWrapId={ "page-wrap" } right>
                <a className="menu-item" href="/">Collective Mood </a>
                <a className="menu-item" href="/personal-history">Mood History</a>
                <a className="menu-item" href="/journal">Private Journal</a>
                <br />
                <br />
                <br />
                <br />
                <br />

                <a className="menu-item" href="/contact-me" onClick={this.props.signOut}>Sign-Out</a>
                </Menu>
        </div>
        </div>
        );
    }
}

export default NavBurger;