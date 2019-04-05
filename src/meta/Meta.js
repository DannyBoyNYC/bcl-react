import React, { Component } from "react";

import Iconlist from "./components/Iconlist";
import BylineSmall from "./components/BylineSmall";
import BylineLarge from "./components/BylineLarge";
import ReadStar from "./components/ReadStar";
import Disclosures from "./components/Disclosures";

class Sidebar extends Component {
  render() {
    return (
      <div className='content__meta-container main'>
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
