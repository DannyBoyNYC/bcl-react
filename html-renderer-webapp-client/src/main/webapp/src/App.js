import React, { Component } from 'react';

import Head from './head/Head';
import Meta from './meta/Meta';
import Body from './body/Body';
import Sidebar from './sidebar/Sidebar';

import eqData from './data/eqData';

import eqSingleCompany from './data/eqSingleCompany';
import eqMultiCompany from './data/eqMultiCompany';
import eqMultiSector from './data/eqMultiSector';

class App extends Component {
  state = {
    data: { ...eqMultiSector, ...eqData },
  };

  render() {
    const {
      analysts,
      assetClass,
      authors,
      brandingType,
      companies,
      date,
      eqAssetClass,
      hashtag,
      headline,
      lede,
      series,
      toc,
    } = this.state.data;

    return (
      <>
        <Head data={this.state.data} />
        <div className="gs-container ">
          <div className="content__main-column">
            <div className="content__article-body">
              <Meta data={this.state.data} />
              <Body data={this.state.data} />
            </div>
          </div>
          <Sidebar data={this.state.data} />
        </div>
      </>
    );
  }
}

export default App;

// const {
//   assetClass,
//   brandingType,
//   date,
//   eqAssetClass,
//   hashtag,
//   headline,
//   lede,
//   series
// } = this.props.data;
