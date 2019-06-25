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
    const {
      assetClass,
      date,
      eqAssetClass,
      headline,
      lede,
      series
    } = this.props;

    return (
      <div className='header__sub'>
        <div className='asset-class'>
          {/* wide screen - left side */}
          <Logo />
          <AssetClass assetClass={assetClass} />
          <SectorIndustry eqAssetClass={eqAssetClass} />
          <Date date={date} className='date' />
        </div>

        <div className='main'>
          {/* small screen - data is next to logo */}
          <div className='main__logo-date'>
            <Logo />
            <Date date={date} className='main__date' />
          </div>
          <Series series={series} />
          <Headline headline={headline} />
          <Lede lede={lede} />
        </div>
      </div>
    );
  }
}

export default Main;
