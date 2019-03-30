import React, { Component } from 'react';

class Header3figure extends Component {
  render() {
    return (
      <h3 className="figure-header">
        <span>Header3</span> contains span tag not supported in prod
      </h3>
    );
  }
}

export default Header3figure;
