import React, { Component } from 'react';
import Certifications from './Certifications';
import Related from './Related';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Certifications />
        <Related />
      </div>
    );
  }
}

export default Sidebar;
