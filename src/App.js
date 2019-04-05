import React, { Component } from "react";

import Head from "./head/Head";
import Meta from "./meta/Meta";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

// duplicated in Head
import multiData from "./data/eq-multicompany-head.js";
import singleData from "./data/eq-singlecompany-head.js";
import multiSector from "./data/eq-mutisector-head.js";
import companyData from "./data/eq-companydata.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      single: false,
      multiData: multiData,
      singleData: singleData
    };
  }

  render() {
    return (
      <>
        <Head single={this.state.single}/>
        <div class="gs-container ">
          <div class="content__main-column">
            <div class="content__article-body">
            <Meta />
            <Body />
            </div>
          </div>
        <Sidebar single={this.state.single} />
        </div>
        </>
      );
    }
  }
  
  export default App;
  