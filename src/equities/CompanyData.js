import React, { Component } from 'react';

class CompanyData extends Component {
  render() {
    return (
      <div class="eqdata ratings">
        <ul class="">
          <li>
            <p class="sector">MDLZ</p>
            <p class="sector-rating">
              <a href="#0">OVERWEIGHT</a>
            </p>
            <p class="status">Unchanged</p>
          </li>

          <li>
            <p class="sector">Industry View</p>
            <p class="sector-rating">
              <a href="#0">NEUTRAL</a>
            </p>
            <p class="status">Unchanged</p>
          </li>

          <li>
            <p class="sector">Price Target</p>
            <p class="sector-rating">
              <a href="#0">USD 51.00</a>
            </p>
            <p class="status">Raised 4% from USD 49.00</p>
          </li>
          {/* end 3 */}
          <li>
            <p class="sector">Price (23-Jan-2019)</p>
            <p class="sector-rating">
              <a href="#0">USD 48.34</a>
            </p>
          </li>

          <li>
            <p class="sector">Potential Upside/Downside</p>
            <p class="sector-rating">
              <a href="#0">+6.2%</a>
            </p>
          </li>

          <li>
            <p class="sector">Tickers</p>
            <p class="sector-rating">
              <a href="#0">MDLZ</a>
            </p>
          </li>
          {/* end 6 */}
          <li>
            <p class="sector">Market Cap (USD mn)</p>
            <p class="sector-rating">
              <a href="#0">69378</a>
            </p>
          </li>

          <li>
            <p class="sector">Shares Outstanding (mn)</p>
            <p class="sector-rating">
              <a href="#0">1444.17</a>
            </p>
          </li>

          <li>
            <p class="sector">Free Float (%)</p>
            <p class="sector-rating">
              <a href="#0">99.65</a>
            </p>
          </li>

          <li>
            <p class="sector">52 Wk Avg Daily Volume (mn)</p>
            <p class="sector-rating">
              <a href="#0">7.9</a>
            </p>
          </li>

          <li>
            <p class="sector">52 Wk Avg Daily Value (USD mn)</p>
            <p class="sector-rating">
              <a href="#0">N/A</a>
            </p>
          </li>

          <li>
            <p class="sector">Dividend Yield (%)</p>
            <p class="sector-rating">
              <a href="#0">2.2</a>
            </p>
          </li>
          {/* end 12 */}
          <li>
            <p class="sector">Return on Equity TTM (%)</p>
            <p class="sector-rating">
              <a href="#0">2.2</a>
            </p>
          </li>
          <li>
            <p class="sector">Current BVPS (USD)</p>
            <p class="sector-rating">
              <a href="#0">17.67</a>
            </p>
          </li>

          <li class="source">Source: Refinitiv</li>

          {/* end 15 */}

          <li>
            <p class="sector">Price Performance</p>
            <p class="sector-rating">
              <a href="#0">Exchange-Nasdaq</a>
            </p>
          </li>
          <li>
            <p class="sector">52 Week range</p>
            <p class="sector-rating">
              <a href="#0">USD 48.46-37.42</a>
            </p>
          </li>

          <li class="eqchart">
            <img src="img/eqchart.png" alt="" />
          </li>

          <li class="source">Link to Barclays Live for interactive charting</li>
        </ul>
      </div>
    );
  }
}

export default CompanyData;
