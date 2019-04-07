import React, { Component } from 'react';

import EqDatablock from './sub/EqDatablock';

class MultiCompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubStats: false,
    };
    this.openStats = this.openStats.bind(this);
  }

  openStats(event) {
    event.preventDefault();
    console.log(this);
    const tocRef = this.refs.stats;
    tocRef.classList.toggle('stats__open');
    this.setState(state => ({
      showMenu: !state.showSubStats,
    }));
  }

  render() {
    return (
      <div className="ratings multicompany">
        <ul className="data-block__multi">
          <li>
            <p className="datum">U.S. Payments, Processors &amp; IT Services</p>
            <p className="rating">
              <a href="#0">POSITIVE</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          <li>
            <p className="datum">
              <a href="#!" onClick={this.openStats}>
                Fleetcor Technologies (FLT)
              </a>
            </p>
            <p className="rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>
          {/* hidden activated by link above */}
          <li className="stats" ref="stats">
            <EqDatablock />
          </li>

          <li>
            <p className="datum">
              <a href="#!" onClick={this.openStats}>
                Global Payments Inc. (GPN)
              </a>
            </p>
            <p className="rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>
          {/* hidden activated by link above */}
          <li className="stats" ref="stats">
            <EqDatablock />
          </li>
          <li>
            <p className="datum">
              <a href="#!" onClick={this.openStats}>
                MasterCard Inc. (MA)
              </a>
            </p>
            <p className="rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>
          {/* hidden activated by link above */}
          <li className="stats" ref="stats">
            <EqDatablock />
          </li>
          <li>
            <p className="datum">
              <a href="#!" onClick={this.openStats}>
                Paychex, Inc. (PAYX)
              </a>
            </p>
            <p className="rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>
          {/* hidden activated by link above */}
          <li className="stats" ref="stats">
            <EqDatablock />
          </li>
          <li>
            <p className="full-ratings">
              For a full list of our ratings, price target and earnings changes
              in this report, click <a href="#eqdatatable">here</a>.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default MultiCompanyData;
