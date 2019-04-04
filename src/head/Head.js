import React, { Component } from "react";
import Toc from "./Toc";
import Main from "./Main";

import multiData from "../data/eq-multicompany-head.js";
import singleData from "../data/eq-singlecompany-head.js";
import companyData from "../data/eq-companydata.js";

class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const single = true;
    return (
      <>
        <Toc data={single ? singleData : multiData} />
        <Main data={single ? singleData : multiData} />
      </>
    );
  }
}

export default Head;
