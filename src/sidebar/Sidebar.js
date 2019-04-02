import React, { Component } from 'react';
import CompanyData from '../equities/CompanyData';
import MultiCompanyData from '../equities/MultiCompanyData';
import Certifications from './Certifications';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <MultiCompanyData />
        {/* <CompanyData /> */}
        <Certifications />
        {/* <Related /> */}
      </div>
    );
  }
}

export default Sidebar;
