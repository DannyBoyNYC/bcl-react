import React, { Component } from 'react';

class Lede extends Component {
  render() {
    return (
      <p className="lede">
        This is a test of multimedia in a composer report wherein the multimedia
        asset is not the primary focus of the report. Clicking on Read More in
        the email should go to the top of this report while clicking on Listen
        in the email should go to the multimedia asset in this report.
        <a style={{ display: 'none' }} href="#audioAsset">
          multimedia
        </a>
      </p>
    );
  }
}

export default Lede;
