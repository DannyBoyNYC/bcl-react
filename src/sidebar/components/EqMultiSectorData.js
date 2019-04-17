import React, { Component } from 'react';

import EqSector from './sub/EqSector';

class MultiSectorData extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="ratings multisector">
        <ul className="data-block__multisector">
          <EqSector data={data} temp="Americans Integrated Oil" />
          <EqSector data={data} temp="European Integrated Oil &amp; Refining" />
          <EqSector data={data} temp="U.S. Independent Refiners" />
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

export default MultiSectorData;
