import React, { Component } from 'react';
export default class PorfolioItem extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="portfolio-item-wrapper">
                <div className="column">
                    <div className="portfolio-item">
                        <img className="thumb" src={`${resumeData.profilepic}`} alt={`${resumeData.alt}`}/>
                        <div id="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem laboriosam pariatur consequatur, sunt mollitia veritatis cumque voluptate dolore explicabo dicta. Nam pariatur voluptas tempora, ad quod error tempore laudantium ab!
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
