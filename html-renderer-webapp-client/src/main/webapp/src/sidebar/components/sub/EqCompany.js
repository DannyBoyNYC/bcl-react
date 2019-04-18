import React, { Component } from 'react';

import EqDatablock from './EqDatablock';

class EqCompany extends Component {
  constructor() {
    super();
    this.openStats = this.openStats.bind(this);
  }

  openStats(event) {
    event.preventDefault();
    const tocRef = this.refs.stats;
    tocRef.classList.toggle('stats__open');
    this.refs.companyblock.classList.toggle('company__open');
  }

  render() {
    return (

        <ul className="company-block" ref="companyblock" onClick={this.openStats}>
          <li className="datum">
            <a  href="#!">{this.props.name}</a>
          </li>
          <li className="rating">
            <a href="#0">NEUTRAL</a>
          </li>
          <li className="status">
            Unchanged
          </li>

        {/* hidden activated by link above */}
        <li className="stats" ref="stats">
          <EqDatablock />
            </li>

          </ul>

    );
  }
}

export default EqCompany;
