import React, { Component } from 'react';

class Certifications extends Component {
  render() {
    return (
      <div className="sidenav related">
        <div className="main">
          <svg className="icn">
            <title>Related</title>
            <use href="#book" />
          </svg>
          <h1>Related Research</h1>
        </div>

        <div className="related-items">
          <div className="related-item">
            <p className="art">Energy and Pipelines</p>
            <p className="art-link">
              <a href="#sidenav">June 2018 Performance</a>
            </p>
            <date>19 Jun 2018</date>
          </div>

          <div className="related-item">
            <p className="art">United States Outlook</p>
            <p className="art-link">
              <a href="#sidenav">The arrival of fiscal stimulus</a>
            </p>
            <date>16 Jun 2018</date>
          </div>

          <div className="related-item">
            <p className="art">United States GDP Tracking</p>
            <p className="art-link">
              <a href="#sidenav">US GDP: Q2 Tracking at 3.4%</a>
            </p>
            <date>11 Jun 2018</date>
          </div>

          <div className="related-item">
            <p className="art">Euro area Outlook</p>
            <p className="art-link">
              <a href="#sidenav">Italy has a government!</a>
            </p>
            <date>10 Jun 2018</date>
          </div>

          <div className="related-item">
            <p className="art">Italy Focus</p>
            <p className="art-link">
              <a href="#sidenav">Vocal perhaps, but not too loud</a>
            </p>
            <date>09 Jun 2018</date>
          </div>

          <div className="related-item">
            <p className="art">Japan</p>
            <p className="art-link">
              <a href="#sidenav">Trade frictions dampen expectations</a>
            </p>
            <date>09 Jun 2018</date>
          </div>
        </div>
      </div>
    );
  }
}

export default Certifications;
