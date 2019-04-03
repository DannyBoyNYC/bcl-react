import React, { Component } from 'react';

import AssetClass from './sub/AssetClass';
import SectorIndustry from './sub/SectorIndustry';
import Date from './sub/Date';
import Series from './sub/Series';
import Headline from './sub/Headline';
import Lede from './sub/Lede';
import Logo from './sub/Logo';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  render() {
    const data = this.props.data;
    return (
      <div className="header__sub">
        <div className="asset-class">
          {/* wide screen - left side */}
          <Logo />
          <AssetClass assetClass={data.assetClass} />
          <SectorIndustry eqAssetClass={data.eqAssetClass} />
          <Date date={data.date} className="date" />
        </div>

        <div className="main">
          {/* small screen - data is next to logo */}
          <div className="main__logo-date">
            <Logo />
            <Date date={data.date} className="main__date" />
          </div>
          <Series series={data.series[0]} />
          <Headline headline={data.headline} />
          <Lede lede={data.lede} />
        </div>
      </div>
    );
  }
}

export default Main;
