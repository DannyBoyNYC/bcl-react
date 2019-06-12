import React, { Component } from 'react';

import styled from 'styled-components';

const SingleBtn = styled.button`
  background-color: #b2b2b2;
  padding: 0.25rem 0.5rem;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  border: none;
`;

const SingleA = styled.a`
  display: inline-block;
  color: #007eb6;
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: auto;
  svg {
    padding-right: 0.25rem;
    width: 1em !important;
    height: 1em !important;
  }
`;

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
          <SingleA href="# ">
            <svg className="icn">
              <title>Excel attachment</title>
              <use xlinkHref="#pdf" />
            </svg>
            <span>View as a Single Document</span>
          </SingleA>
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
          {/* <ul>
            <li>
              <SingleBtn>View as a Single Document</SingleBtn>
            </li>
          </ul> */}
        </ul>
      </div>
    );
  }
}

export default MultipartList;
