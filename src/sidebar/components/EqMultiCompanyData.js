import React, { Component } from 'react';

import EqCompany from './sub/EqCompany';

class MultiCompanyData extends Component {
  render() {
    return (
      <div className="ratings multicompany">
        <ul className="data-block__multi">
          <li>
            <p className="datum">U.S. Payments, Processors &amp; IT Services</p>
            <p className="rating">
              <a href="#0">POSITIVE</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          <EqCompany />
          <EqCompany />
          <EqCompany />
          <EqCompany />

          <li>
            <p className="full-ratings">
              For a full list of our ratings, price target and earnings changes
              in this report, click <a href="#eqdatatable">here</a>.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default MultiCompanyData;
