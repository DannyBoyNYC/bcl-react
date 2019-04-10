import React, { Component } from 'react';

import Head from './head/Head';
import Meta from './meta/Meta';
import Body from './body/Body';
import Sidebar from './sidebar/Sidebar';

// hashtag #singlecompany IN SIDEBAR
import singleCompany from './data/eq-singlecompany.js';
// hashtag #multicompany
import multiCompany from './data/eq-multicompany.js';
// hashtag #multisector
import multiSector from './data/eq-mutisector.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: { ...multiSector },
    };
  }

  render() {
    return (
      <>
        <Head data={this.state.data} />
        <div className="gs-container ">
          <div className="content__main-column">
            <div className="content__article-body">
              <Meta data={this.state.data} />
              <Body />
            </div>
          </div>
          <Sidebar data={this.state.data} />
        </div>
      </>
    );
  }
}

export default App;
