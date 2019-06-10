import React, { Component } from 'react';

class MultipartList extends Component {
  render() {
    return (
      <div className="multipart-list">
        <div className="multipart-head">
          <svg className="circle" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" />
          </svg>

          <svg className="icn">
            <title>Related</title>
            <use xlinkHref="#books" />
          </svg>
          <div>
            <h1>
              <a href="#0">U.S. Credit Alpha</a>
            </h1>
            <div className="date">04 June 2018</div>
          </div>
        </div>

        <ul className="multipart-items">
          <ul>
            <li className="art">Overview</li>
            <li className="art-link">
              <a href="#mplink">Tightening by the Minute</a>
            </li>
          </ul>

          <ul>
            <li className="art">Focus</li>
            <li className="art-link">
              <a href="#mplink">Crossover Shopping in EM Credits</a>
            </li>
          </ul>

          <ul>
            <li className="art">Investment Grade</li>
            <li className="art-link">
              <a href="#mplink">Juicy Grade A Banks</a>
            </li>
          </ul>

          <ul>
            <li className="art">High Yield</li>
            <li className="art-link">
              <a href="#mplink">Checking in on Fundamentals and Technicals</a>
            </li>
          </ul>
          <ul>
            <li className="art">Leveraged Loans and CLOS</li>
            <li className="art-link">
              <a href="#mplink">CLO Equity: The Long and Short of It</a>
            </li>
          </ul>
          <ul>
            <li className="art">Securitized Credit</li>
            <li className="art-link">
              <a href="#mplink">PACE ABS</a>
            </li>
          </ul>
          <ul>
            <li className="art">Credit Rating Changes</li>
            <li className="art-link">
              <a href="#mplink">Summary</a>
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default MultipartList;
