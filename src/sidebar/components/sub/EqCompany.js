import React, { Component } from 'react';

import EqDatablock from './EqDatablock';

class EqCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubStats: false,
    };
    this.openStats = this.openStats.bind(this);
  }

  openStats(event) {
    event.preventDefault();
    const tocRef = this.refs.stats;
    const companyRef = this.refs.companyblock;
    tocRef.classList.toggle('stats__open');
    companyRef.classList.toggle('company__open');
    this.setState(state => ({
      showMenu: !state.showSubStats,
    }));
  }

  render() {
    return (
      <ul className="company-block" ref="companyblock">
        <li className="company__header" onClick={this.openStats}>
          <p className="datum">
            <a href="#!">{this.props.name}</a>
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
      </ul>
    );
  }
}

export default EqCompany;
