import React, { Component } from 'react';

import Related from './components/Related';
import EqSingleCompanyData from './components/EqSingleCompanyData';
import EqMultiSectorData from './components/EqMultiSectorData';
import EqMultiCompanyData from './components/EqMultiCompanyData';
import Certifications from './components/Certifications';
import { compileFunction } from 'vm';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.someFunc = this.someFunc.bind(this);
  }

  someFunc() {
    // const { hashtag } = this.props.data;
    // if (hashtag === '#multisector') {
    //   let compToRun = <EqMultiSectorData />;
    // } else if (hashtag === '#multicompany') {
    //   let compToRun = <EqMultiCompanyData />;
    // } else if (hashtag === '#singlecompany') {
    //   let compToRun = <EqSingleCompanyData />;
    // }
  }

  render() {
    const { hashtag } = this.props.data;
    // const hashtag = this.props.data.hashtag === '#multisector';
    // console.log(hashtag);

    if (hashtag === '#multisector') {
      return (
        <div className="content__secondary-column">
          <EqMultiSectorData />
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
          {/* <Related /> */}
        </div>
      );
    } else return "something f'ed up";
  }
}

export default Sidebar;
