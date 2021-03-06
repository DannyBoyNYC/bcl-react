import React, { Component } from 'react';

class AsideAttachment extends Component {
  render() {
    return (
      <aside className="attachment rule-left">
        <a href="# ">
          <svg className="icn">
            <title>Excel attachment</title>
            <use xlinkHref="#excel" />
          </svg>

          <span>CDS Options.xls</span>
        </a>
        <span>
          The market for CDS options has experienced significant growth
        </span>
      </aside>
    );
  }
}

export default AsideAttachment;
