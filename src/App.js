import React, { Component } from "react";

import Head from "./head/Head";
import Meta from "./meta/Meta";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

import companies from "./data/eq-companies.js";

import singleCompany from "./data/eq-singlecompany.js";
import multiCompany from "./data/eq-multicompany.js";
import multiSector from "./data/eq-mutisector.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: { ...multiCompany, ...companies },
    };
  }

  render() {
    return (
      <>
        <Head data={this.state.data} />
        <div className='gs-container '>
          <div className='content__main-column'>
            <div className='content__article-body'>
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
