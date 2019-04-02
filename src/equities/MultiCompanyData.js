import React, { Component } from 'react';

class MultiCompanyData extends Component {
  render() {
    return (
      <div className="eqdata ratings multi">
        <ul
          className=""
          style={{
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            paddingBottom: 10,
          }}
        >
          <li
            style={{
              borderBottomStyle: 'dashed',
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              paddingBottom: 10,
            }}
          >
            <p className="sector" style={{ fontWeight: 700 }}>
              U.S. Payments, Processors <br />
              &amp; IT Services
            </p>
            <p className="sector-rating">
              <a href="#0">POSITIVE</a>
            </p>
            <p className="status">Unchanged</p>
          </li>
          <li
            style={{
              paddingTop: 10,
            }}
          >
            <p className="sector" style={{ fontWeight: 700 }}>
              In This Report
            </p>
          </li>
          <li>
            <p className="sector">
              <a href="#!">Fleetcor Technologies (FLT)</a>
            </p>
            <p className="sector-rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          <li>
            <p className="sector">
              <a href="#!">Global Payments Inc. (GPN)</a>
            </p>
            <p className="sector-rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          <li>
            <p className="sector">
              <a href="#!">MasterCard Inc. (MA)</a>
            </p>
            <p className="sector-rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          <li>
            <p className="sector">
              <a href="#!">Paychex, Inc. (PAYX)</a>
            </p>
            <p className="sector-rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          <li>
            <p className="sector" style={{ fontWeight: 500 }}>
              For a full list of our ratings, price target and earnings changes
              in this report, click <a href="#!">here</a>.
            </p>
          </li>

          {/* <li>
            <p className="sector">Price Target</p>
            <p className="sector-rating">
              <a href="#0">USD 51.00</a>
            </p>
            <p className="status">Raised 4% from USD 49.00</p>
          </li> */}

          {/* end 3 */}
          {/* <li>
            <p className="sector">Price (23-Jan-2019)</p>
            <p className="sector-rating">
              <a href="#0">USD 48.34</a>
            </p>
          </li>

          <li>
            <p className="sector">Potential Upside/Downside</p>
            <p className="sector-rating">
              <a href="#0">+6.2%</a>
            </p>
          </li>

          <li>
            <p className="sector">Tickers</p>
            <p className="sector-rating">
              <a href="#0">MDLZ</a>
            </p>
          </li> */}

          {/* end 6 */}
          {/* <li>
            <p className="sector">Market Cap (USD mn)</p>
            <p className="sector-rating">
              <a href="#0">69378</a>
            </p>
          </li>

          <li>
            <p className="sector">Shares Outstanding (mn)</p>
            <p className="sector-rating">
              <a href="#0">1444.17</a>
            </p>
          </li>

          <li>
            <p className="sector">Free Float (%)</p>
            <p className="sector-rating">
              <a href="#0">99.65</a>
            </p>
          </li>

          <li>
            <p className="sector">52 Wk Avg Daily Volume (mn)</p>
            <p className="sector-rating">
              <a href="#0">7.9</a>
            </p>
          </li>

          <li>
            <p className="sector">52 Wk Avg Daily Value (USD mn)</p>
            <p className="sector-rating">
              <a href="#0">N/A</a>
            </p>
          </li>

          <li>
            <p className="sector">Dividend Yield (%)</p>
            <p className="sector-rating">
              <a href="#0">2.2</a>
            </p>
          </li> */}
          {/* end 12 */}
          {/* <li>
            <p className="sector">Return on Equity TTM (%)</p>
            <p className="sector-rating">
              <a href="#0">2.2</a>
            </p>
          </li>
          <li>
            <p className="sector">Current BVPS (USD)</p>
            <p className="sector-rating">
              <a href="#0">17.67</a>
            </p>
          </li>

          <li className="source">Source: Refinitiv</li> */}

          {/* end 15 */}

          {/* <li>
            <p className="sector">Price Performance</p>
            <p className="sector-rating">
              <a href="#0">Exchange-Nasdaq</a>
            </p>
          </li>
          <li>
            <p className="sector">52 Week range</p>
            <p className="sector-rating">
              <a href="#0">USD 48.46-37.42</a>
            </p>
          </li> */}

          {/* <li className="eqchart">
            <img src="img/eqchart.png" alt="" />
          </li>

          <li className="source">
            Link to Barclays Live for interactive charting
          </li> */}
        </ul>
      </div>
    );
  }
}

export default MultiCompanyData;
