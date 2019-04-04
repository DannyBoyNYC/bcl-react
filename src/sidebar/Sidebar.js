import React, { Component } from "react";

import Related from "./components/Related";
import EqSingleCompanyData from "./components/EqSingleCompanyData";
import EqMultiCompanyData from "./components/EqMultiCompanyData";
import Certifications from "./components/Certifications";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  // function sepData() {

  // }

  render() {
    const single = true;
    return (
      <div className='sidebar'>
        {single ? <EqSingleCompanyData /> : <EqMultiCompanyData />}
        <Certifications />
        {/* <Related /> */}
      </div>
    );
  }
}

export default Sidebar;
