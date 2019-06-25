import React, { Component } from 'react';

import EqCompany from './EqCompany';

class EqSector extends Component {
  state = {
    showSubStats: false
  };

  openCompanies = event => {
    event.preventDefault();
    const tocRef = this.refs.stats;
    const sectorRef = this.refs.sectorblock;
    tocRef.classList.toggle('stats__open');
    sectorRef.classList.toggle('sector__open');
    this.setState(state => ({
      showMenu: !state.showSubStats
    }));
  };

  render() {
    const data = this.props.data;
    return (
      <ul className='sector-block' ref='sectorblock'>
        <li className='datum' onClick={this.openCompanies}>
          <a href='!0'>{this.props.temp}</a>
        </li>
        <li className='rating'>
          <a href='#0'>POSITIVE</a>
        </li>
        <li className='status'>Unchanged</li>
        {/* hidden activated by link above */}
        <li className='stats' ref='stats'>
          {/* {Object.keys(data.companies).map(key => (
            <EqCompany key={key} index={key} company={data.company[key]} />
          ))} */}
          <EqCompany name={data.companies[0].name} />
          <EqCompany name={data.companies[1].name} />
          <EqCompany name={data.companies[2].name} />
          <EqCompany name={data.companies[3].name} />
        </li>
      </ul>
    );
  }
}

export default EqSector;
