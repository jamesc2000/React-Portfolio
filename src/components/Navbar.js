import React, { Component } from "react";
export default class Navbar extends Component {
    render() {
        return (
            <nav id="nav-wrap" className={this.props.classOpacity}>
                <a
                    className="mobile-btn"
                    href="#nav-wrap"
                    title="Show navigation"
                >
                    Show navigation
                </a>
                <a className="mobile-btn" href="#" title="Hide navigation">
                    Hide navigation
                </a>
                <ul id="nav" className="nav">
                    <li className={this.props.selected[0]}><a className="smoothscroll" href="#home">Home</a></li>
                    <li className={this.props.selected[1]}><a className="smoothscroll" href="#about">About</a></li>
                    <li className={this.props.selected[2]}><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li className={this.props.selected[3]}><a className="smoothscroll" href="#resume">Resume</a></li>
                </ul>
            </nav>
        );
    }
}
