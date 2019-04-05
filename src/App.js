import React, { Component } from "react";

import Head from "./head/Head";
import Meta from "./meta/Meta";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

// duplicated in Head
import multiCompany from "./data/eq-multicompany-head.js";
import singleCompany from "./data/eq-singlecompany-head.js";
import multiSector from "./data/eq-mutisector-head.js";

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
        <Head data={this.state.data}/>
        <div class="gs-container ">
          <div class="content__main-column">
            <div class="content__article-body">
            <Meta />
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
  