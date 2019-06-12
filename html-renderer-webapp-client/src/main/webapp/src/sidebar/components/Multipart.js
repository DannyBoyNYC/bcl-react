import React, { Component } from 'react';

import styled from 'styled-components';

const SingleA = styled.a`
  margin-top: 2rem;
  color: #007eb6;
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: auto;
  svg {
    padding-right: 0.25rem;
  }
`;

class Multipart extends Component {
  render() {
    return (
      <div className="multipart-nav-holder multipart-nav-holder-right core">
        <div className="multipart-list">
          <div className="multipart-head">
            <svg className="icn">
              <title>Related</title>
              <use xlinkHref="#book" />
            </svg>
            <div>
              <h1 comp_id="_bbb76dfb-6c95-4f48-9fc6-c3508ff89f5c">
                <a href="#0">U.S. Credit Alpha</a>
              </h1>
              <date>04 June 2018</date>
            </div>
          </div>
          <ul className="multipart-items">
            <ul style={{ marginTop: '0.75' + 'rem' }}>
              <li>
                <SingleA href="# ">
                  <svg className="icn">
                    <title>Excel attachment</title>
                    <use xlinkHref="#pdf" />
                  </svg>
                  <span>View as a Single Document</span>
                </SingleA>
              </li>
            </ul>
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
      </div>
    );
  }
}

export default Multipart;
