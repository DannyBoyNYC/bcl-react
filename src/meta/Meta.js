import React, { Component } from 'react';
import Iconlist from './Iconlist';
import BylineSmall from './BylineSmall';
import BylineLarge from './BylineLarge';
import ReadStar from './ReadStar';
import Disclosures from './Disclosures';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Iconlist />
        <BylineSmall />
        <ReadStar />
        <BylineLarge />
        <Disclosures />
      </div>
    );
  }
}

export default Sidebar;
