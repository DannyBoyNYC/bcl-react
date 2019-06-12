import React, { Component } from 'react';

class AsideAttachment extends Component {
  render() {
    return (
      <aside className="attachment rule-left">
        <a href="# ">
          <svg className="icn">
            <title>Excel attachment</title>
            <use xlinkHref="#pdf" />
          </svg>

          <span>View as a Single Document</span>
        </a>
        <span />
      </aside>
    );
  }
}

export default AsideAttachment;
