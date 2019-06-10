import React, { Component } from 'react';

import AssetClass from './components/AssetClass';
import SectorIndustry from './components/SectorIndustry';
import Date from './components/Date';
import Series from './components/Series';
import Headline from './components/Headline';
import Lede from './components/Lede';
import Logo from './components/Logo';

class Main extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="header__sub">
        <div className="asset-class">
          {/* wide screen - left side */}
          <Logo />
          <AssetClass assetClass={data.assetClass} />
          {/* <SectorIndustry eqAssetClass={data.eqAssetClass} /> */}
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
