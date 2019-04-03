import React, { Component } from "react";
import EqSingleCompanyData from "./components/EqSingleCompanyData";
import EqMultiCompanyData from "./components/EqMultiCompanyData";
import Certifications from "./components/Certifications";

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        {/* <EqMultiCompanyData /> */}
        <EqSingleCompanyData />
        <Certifications />
        {/* <Related /> */}
      </div>
    );
  }
}

export default Sidebar;
