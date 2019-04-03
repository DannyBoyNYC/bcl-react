import React, { Component } from 'react';

class BylineLarge extends Component {
  render() {
    return (
      <div className="byline-lg byline">
        <ul>
          <li
            className="analyst"
            rel="author"
            itemScope=""
            itemType="http://schema.org/Person"
            itemProp="author"
          >
            <a className="analyst-link" href="#single">
              <img
                className="analyst-photo"
                src="https://myqa.barcapint.com/publiccp/RUD/234/LB02732_round.png"
                alt="analyst"
              />
              <div className="analyst-deets">
                <span itemProp="name">Harry Mateer</span>
                <span itemProp="affiliation">BCI, US</span>
              </div>
            </a>
          </li>

          <li
            className="analyst"
            rel="author"
            itemScope=""
            itemType="http://schema.org/Person"
            itemProp="author"
          >
            <a className="analyst-link" href="#single">
              <img
                className="analyst-photo"
                src="https://liveqa.barcap.com/publiccp/RUD/812/LB04489_round.png"
                alt="analyst"
              />
              <div className="analyst-deets">
                <span itemProp="name">Lhamsuren Sharavdemberel, CFA</span>
                <span itemProp="affiliation">BCI, US</span>
              </div>
            </a>
          </li>

          <li
            className="analyst"
            rel="author"
            itemScope=""
            itemType="http://schema.org/Person"
            itemProp="author"
          >
            <a className="analyst-link" href="#single">
              <img
                className="analyst-photo"
                src="img/analyst-2.gif"
                alt="analyst"
              />
              <div className="analyst-deets">
                <span itemProp="name">Yung Chuan Koh</span>
                <span itemProp="affiliation">BCI, US</span>
              </div>
            </a>
          </li>

          <li
            className="analyst"
            rel="author"
            itemScope=""
            itemType="http://schema.org/Person"
            itemProp="author"
          >
            <a className="analyst-link" href="#single">
              <div className="analyst-photo">WW</div>
              <div className="analyst-deets">
                <span itemProp="name">Hale Holden</span>
                <span itemProp="affiliation">BCI, US</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default BylineLarge;
