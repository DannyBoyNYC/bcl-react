import React, { Component } from 'react';

class EqDatablock extends Component {
  render() {
    return (
      <ul className="data-block">
        <li>
          <p className="datum">MDLZ</p>
          <p className="rating">
            <a href="#0">OVERWEIGHT</a>
          </p>
          <p className="status">Unchanged</p>
        </li>

        <li>
          <p className="datum">Industry View</p>
          <p className="rating">
            <a href="#0">NEUTRAL</a>
          </p>
          <p className="status">Unchanged</p>
        </li>

        <li>
          <p className="datum">Price Target</p>
          <p className="rating">
            <a href="#0">USD 51.00</a>
          </p>
          <p className="status">Raised 4% from USD 49.00</p>
        </li>
        {/* end 3 */}
        <li>
          <p className="datum">Price (23-Jan-2019)</p>
          <p className="rating">
            <a href="#0">USD 48.34</a>
          </p>
        </li>

        <li>
          <p className="datum">Potential Upside/Downside</p>
          <p className="rating">
            <a href="#0">+6.2%</a>
          </p>
        </li>

        <li>
          <p className="datum">Tickers</p>
          <p className="rating">
            <a href="#0">MDLZ</a>
          </p>
        </li>
        {/* end 6 */}
        <li>
          <p className="datum">Market Cap (USD mn)</p>
          <p className="rating">
            <a href="#0">69378</a>
          </p>
        </li>

        <li>
          <p className="datum">Shares Outstanding (mn)</p>
          <p className="rating">
            <a href="#0">1444.17</a>
          </p>
        </li>

        <li>
          <p className="datum">Free Float (%)</p>
          <p className="rating">
            <a href="#0">99.65</a>
          </p>
        </li>

        <li>
          <p className="datum">52 Wk Avg Daily Volume (mn)</p>
          <p className="rating">
            <a href="#0">7.9</a>
          </p>
        </li>

        <li>
          <p className="datum">52 Wk Avg Daily Value (USD mn)</p>
          <p className="rating">
            <a href="#0">N/A</a>
          </p>
        </li>

        <li>
          <p className="datum">Dividend Yield (%)</p>
          <p className="rating">
            <a href="#0">2.2</a>
          </p>
        </li>
        {/* end 12 */}
        <li>
          <p className="datum">Return on Equity TTM (%)</p>
          <p className="rating">
            <a href="#0">2.2</a>
          </p>
        </li>
        <li>
          <p className="datum">Current BVPS (USD)</p>
          <p className="rating">
            <a href="#0">17.67</a>
          </p>
        </li>

        <li className="sources">Source: Refinitiv</li>

        {/* end 15 */}

        <li>
          <p className="datum">Price Performance</p>
          <p className="rating">
            <a href="#0">Exchange-Nasdaq</a>
          </p>
        </li>
        <li>
          <p className="datum">52 Week range</p>
          <p className="rating">
            <a href="#0">USD 48.46-37.42</a>
          </p>
        </li>

        <li className="eqchart">
          <img src="img/eqchart.png" alt="" />
        </li>

        <li className="sources">
          <p>
            <a href="!0">Barclays Live interactive charting</a>
          </p>
          <button>Company Page</button>
        </li>
      </ul>
    );
  }
}

export default EqDatablock;
