import React, { Component } from 'react';

class Iconlist extends Component {
  render() {
    return (
      <ul className="icon-list byline">
        <li className="icon-list--utilities">
          <a href="#icn-1">
            <svg className="icn">
              <title>Utilities</title>
              <use xlinkHref="#icn-utilities" />
            </svg>
          </a>
        </li>
        <li className="icon-list--print">
          <a href="#icn-2">
            <svg className="icn">
              <title>Print</title>
              <use xlinkHref="#icn-print" />
            </svg>
          </a>
        </li>
        <li className="icon-list--attachments">
          <a href="#icn-3">
            <svg className="icn">
              <title>Attachments</title>
              <use xlinkHref="#icn-attachments" />
            </svg>
          </a>
        </li>

        <li className="icon-list--fontsize">
          <a href="#icn-4">
            <svg className="icn">
              <title>Font Size</title>
              <use xlinkHref="#icn-fontsize" />
            </svg>
          </a>
        </li>
      </ul>
    );
  }
}

export default Iconlist;
