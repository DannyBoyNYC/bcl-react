import React, { Component } from 'react';

import EqDatablock from './sub/EqDatablock';

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
    console.log(this);
    const tocRef = this.refs.stats;
    tocRef.classList.toggle('stats__open');
    this.setState(state => ({
      showMenu: !state.showSubStats,
    }));
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default EqCompany;
