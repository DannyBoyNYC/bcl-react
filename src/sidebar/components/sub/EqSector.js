import React, { Component } from 'react';

import EqCompany from './EqCompany';

class EqSector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubStats: false,
    };
    this.openCompanies = this.openCompanies.bind(this);
  }

  openCompanies(event) {
    event.preventDefault();
    const tocRef = this.refs.stats;
    const sectorRef = this.refs.sectorblock;
    tocRef.classList.toggle('stats__open');
    sectorRef.classList.toggle('sector__open');
    this.setState(state => ({
      showMenu: !state.showSubStats,
    }));
  }

  render() {
    return (
      <ul className="sector-block" ref="sectorblock">
        <li onClick={this.openCompanies}>
          <p className="datum">
            <a href="!0">Americas Integrated Oil</a>
          </p>
          <p className="rating">
            <a href="#0">POSITIVE</a>
          </p>
          <p className="status">Unchanged</p>
        </li>
        {/* hidden activated by link above */}
        <li className="stats" ref="stats">
          <EqCompany />
          <EqCompany />
          <EqCompany />
          <EqCompany />
        </li>
      </ul>
    );
  }
}

export default EqSector;
