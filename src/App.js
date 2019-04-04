import React, { Component } from "react";

import Head from "./head/Head";
import Meta from "./meta/Meta";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";

class App extends Component {

  constructor() {
    super();
    this.state = {
      single: true
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
  