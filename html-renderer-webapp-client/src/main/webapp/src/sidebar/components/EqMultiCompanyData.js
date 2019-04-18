import React, { Component } from 'react';

import EqCompany from './sub/EqCompany';

class MultiCompanyData extends Component {
  render() {

    return (
      <div className="ratings multicompany">
        <ul className="data-block__multi">
          <li className="datum">
            U.S. Payments, Processors &amp; IT Services
          </li>
          <li className="rating">
            <a href="#0">POSITIVE</a>
          </li>
          <li className="status">
            Unchanged
          </li> 
        </ul>

        <EqCompany name={'Fleetcor Technologies Incorporated (FLT)'} />
        <EqCompany name={'Global Payments Inc. (GPN)'} />
        <EqCompany name={'MasterCard (MA)'} />
        <EqCompany name={'PayChex Inc. (PAYX)'} />

        <p className="full-ratings">
          For a full list of our ratings, price target and earnings changes
          in this report, click <a href="#eqdatatable">here</a>.
        </p>
      </div>
    );
  }
}

export default MultiCompanyData;
