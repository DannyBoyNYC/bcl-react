import React, { Component } from "react";
import Toc from "./Toc";
import Main from "./Main";

import multiData from "../data/eq-multicompany-head.js";
import singleData from "../data/eq-singlecompany-head.js";
import companyData from "../data/eq-companydata.js";

class Head extends Component {

  render() {
    const single = this.props.single;
    return (
      <header class="content__head">
        <div class="content__header tonal__header u-cf">
          <div class="gs-container">
            <div class="content__main-column">
              <Toc data={single ? singleData : multiData} />
              <Main data={single ? singleData : multiData} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Head;
