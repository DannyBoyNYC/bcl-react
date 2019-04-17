import React, { Component } from 'react';

class EqDatablock extends Component {
  render() {
    return (
      <ul className="data-block">
        <ul>
          <li className="datum">MDLZ</li>
          <li className="rating"><a href="#0">OVERWEIGHT</a></li>
          <li className="status">Unchanged</li>
        </ul>
        <ul>
          <li className="datum">Industry View</li>
          <li className="rating"><a href="#0">NEUTRAL</a></li>
          <li className="status">Unchanged</li>
        </ul>
        <ul className="price-target">
          <li className="datum">Price Target</li>
          <li className="rating"><a href="#0">USD 51.00</a></li>
          <li className="status">Raised 4% from USD 49.00</li>
        </ul>
        
        {/* end 3 */}
        <ul>
          <li className="datum">Price (23-Jan-2019</li>
          <li className="rating"><a href="#0">USD 48.34</a></li>
        </ul>
        <ul>
          <li className="datum">Potential Upside/Downside</li>
          <li className="rating"><a href="#0">+6.2%</a></li>
        </ul>
        <ul>
          <li className="datum">Tickers</li>
          <li className="rating"><a href="#0">MDLZ</a></li>
        </ul>
        {/* end 6 */}
        <ul>
          <li className="datum">Market Cap (USD mn)</li>
          <li className="rating"><a href="#0">69378</a></li>
        </ul>
        <ul>
          <li className="datum">Shares Outstanding (mn)</li>
          <li className="rating"><a href="#0">1444.17</a></li>
        </ul>
        <ul>
          <li className="datum">Free Float (%)</li>
          <li className="rating"><a href="#0">99.65</a></li>
        </ul>
        <ul>
          <li className="datum">52 Wk Avg Daily Volume (mn)</li>
          <li className="rating"><a href="#0">7.9</a></li>
        </ul>
        <ul>
          <li className="datum">52 Wk Avg Daily Value (USD mn)</li>
          <li className="rating"><a href="#0">N/A</a></li>
        </ul>
        <ul>
          <li className="datum">Dividend Yield (%)</li>
          <li className="rating"><a href="#0">2.2</a></li>
        </ul>
        {/* end 12 */}
        <ul>
          <li className="datum">Return on Equity TTM (%)</li>
          <li className="rating"><a href="#0">2.2</a></li>
        </ul>
        <ul>
          <li className="datum">Current BVPS (USD)</li>
          <li className="rating"><a href="#0">17.67</a></li>
        </ul>

        <li className="sources">Source: Refinitiv</li>

        {/* end 15 */}
        <ul>
          <li className="datum">Price Performance</li>
          <li className="rating"><a href="#0">Exchange-Nasdaq</a></li>
        </ul>
        <ul>
          <li className="datum">52 Week range</li>
          <li className="rating"><a href="#0">USD 48.46-37.42</a></li>
        </ul>
        <img src="img/eqchart.png" alt="" />

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
