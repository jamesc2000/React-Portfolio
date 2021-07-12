import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {
                resumeData.portfolio.map(i => (
                  <PortfolioItem key={i.name} name={i.name} desc={i.desc} src={i.imgurl} demo={i.demo} source={i.source}/>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}