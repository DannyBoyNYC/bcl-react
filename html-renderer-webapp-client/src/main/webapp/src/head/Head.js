import React, { Component } from 'react';
import Toc from './Toc';
import Main from './Main';

class Head extends Component {
  render() {
    const {
      assetClass,
      brandingType,
      date,
      eqAssetClass,
      hashtag,
      headline,
      lede,
      series,
    } = this.props.data;

    // const data = this.props.data;
    return (
      <header className="content__head">
        <div className="content__header tonal__header u-cf">
          <div className="gs-container">
            <div className="content__main-column">
              <Toc
                brandingType={brandingType}
                hashtag={hashtag}
                headline={headline}
                series={series}
              />
              <Main
                date={date}
                eqAssetClass={eqAssetClass}
                assetClass={assetClass}
                series={series}
                headline={headline}
                lede={lede}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Head;
