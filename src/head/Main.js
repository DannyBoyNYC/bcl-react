import React, { Component } from 'react';

import AssetClass from './sub/AssetClass';
import SectorIndustry from './sub/SectorIndustry';
import Date from './sub/Date';
import Series from './sub/Series';
import Headline from './sub/Headline';
import Lede from './sub/Lede';
import Logo from './sub/Logo';

import headData from '../data/multi-data-head.js';
// import headData from '../data/data-head.js';

class Main extends Component {
  constructor() {
    super();
    // now loaded from json
    this.state = {
      content: {
        assetClass: ['Equity Research'],
        eqAssetClass: ['Consumer | U.S. Food'],
        date: ['30 July 2019'],
        series: ['Mondelez International (MDLZ)', 'test'],
        headline: ['Good Things Come In Threes (%)'],
        lede: [
          'With MDLZ trading at a ~+30% premium to the food group (and shares +20% YTD), we often hear from investors that the stock is already well owned.',
        ],
      },
    };
  }

  render() {
    return (
      <div className="header__sub">
        <div className="asset-class">
          {/* wide screen - left side - logo assetclass sectorindustry date */}
          <Logo />
          <AssetClass assetClass={headData.assetClass} />
          <SectorIndustry eqAssetClass={headData.eqAssetClass} />
          <Date date={headData.date} className="date" />
        </div>

        <div className="main">
          {/* small screen - logo date - data is next to logo */}
          <div className="main__logo-date">
            <Logo />
            <Date date={headData.date} className="main__date" />
          </div>
          <Series series={headData.series[0]} />
          <Headline headline={headData.headline} />
          <Lede lede={headData.lede} />
        </div>
      </div>
    );
  }
}

export default Main;
