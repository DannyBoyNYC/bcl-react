import React, { Component } from "react";
import Toc from "./Toc";
import Main from "./Main";

// import headData from '../data/eq-multicompany-head.js';
import headData from "../data/eq-singlecompany-head.js";
import companyData from "../data/eq-companydata.js";

class Head extends Component {
  render() {
    return (
      <>
        <Toc data={headData} />
        <Main data={headData} />
      </>
    );
  }
}

export default Head;
