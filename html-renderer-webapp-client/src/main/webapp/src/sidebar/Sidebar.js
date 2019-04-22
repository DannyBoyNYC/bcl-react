import React, { Component } from 'react';

import Related from './components/Related';
import EqSingleCompanyData from './components/EqSingleCompanyData';
import EqMultiSectorData from './components/EqMultiSectorData';
import EqMultiCompanyData from './components/EqMultiCompanyData';
import Certifications from './components/Certifications';

class Sidebar extends Component {
  render() {
    const { hashtag } = this.props.data;

    if (hashtag === '#multisector') {
      return (
        <div className="content__secondary-column">
          <EqMultiSectorData data={this.props.data} />
          <Certifications />
          {/* <Related /> */}
        </div>
      );
    } else if (hashtag === '#multicompany') {
      return (
        <div className="content__secondary-column">
          <EqMultiCompanyData />
          <Certifications />
          {/* <Related /> */}
        </div>
      );
    } else if (hashtag === '#singlecompany') {
      return (
        <div className="content__secondary-column">
          <EqSingleCompanyData />
          <Certifications />
          <Related />
        </div>
      );
    } else return "something f'ed up";
  }
}

export default Sidebar;
