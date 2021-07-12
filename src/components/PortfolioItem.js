import React, { Component } from 'react';
export default class PorfolioItem extends Component {
    render() {
        return (
            <div className="portfolio-item-wrapper">
                <div className="column">
                    <div className="portfolio-item">
                        <img className="thumb" src={`${this.props.src}`} alt={`${this.props.alt}`}/>
                        <div id="name">
                            {this.props.name}
                        </div>
                        <div id="desc">
                            {this.props.desc}
                        </div>
                        <div id="buttons" className="bgrid-halves s-bgrid-halves cf">
                            <a href={`${this.props.demo}`}><button id="demo" className="button column centered">Demo Project</button></a>
                            <a href={`${this.props.source}`}><button id="view" className="button column centered">View Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
