import React, { Component } from "react";

import Related from "./components/Related";
import EqSingleCompanyData from "./components/EqSingleCompanyData";
import EqMultiCompanyData from "./components/EqMultiCompanyData";
import Certifications from "./components/Certifications";

class Sidebar extends Component {

  render() {
    return (
      <div class="content__secondary-column">
        {this.props.single ? <EqSingleCompanyData /> : <EqMultiCompanyData />}
        <Certifications />
        {/* <Related /> */}
      </div>
    );
  }
}

export default Sidebar;
