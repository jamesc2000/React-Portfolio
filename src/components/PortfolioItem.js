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
                            <button id="demo" class="button column centered">Demo Project</button>
                            <button id="view" class="button column centered">View Code</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
