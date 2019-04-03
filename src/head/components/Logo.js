import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <a href="https://live.barcap.com" className="logo-ref">
        <svg width="234" height="118">
          <title>Barclays Logo</title>
          <use xlinkHref="#logo" />
        </svg>
      </a>
    );
  }
}

export default Logo;
