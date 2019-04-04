import React, { Component } from "react";

class MultiCompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubStats: false
    };
    this.openStats = this.openStats.bind(this);
  }

  openStats(event) {
    event.preventDefault();
    const tocRef = this.refs.stats;
    tocRef.classList.toggle("stats__open");
    this.setState(state => ({
      showMenu: !state.showSubStats
    }));
  }

  render() {
    return (
      <div className='eqdata ratings multi'>
        <ul className='eqdata__ratings'>
          <li className='eqdata__eqassetclass'>
            <p className='sector' style={{ fontWeight: 600 }}>
              U.S. Payments, Processors &amp; IT Services
            </p>
            <p className='sector-rating'>
              <a href='#0'>POSITIVE</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>
          <li
            style={{
              paddingTop: 10
            }}
          >
            <p className='sector'>
              <a href='#!' onClick={this.openStats}>
                Fleetcor Technologies (FLT)
              </a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>
          {/* hiden for industry view */}
          <div className='sub-stats' ref='stats'>
            <ul>
          <li>
            <p class='sector'>Industry View</p>
            <p class='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p class='status'>Unchanged</p>
              </li>
            </ul>
            </div>
          {/* hidden activated by link above */}
          <div className='sub-stats' ref='stats'>
            <ul>
          <li>
            <p class='sector'>Industry View</p>
            <p class='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p class='status'>Unchanged</p>
          </li>

          <li>
            <p class='sector'>Price Target</p>
            <p class='sector-rating'>
              <a href='#0'>USD 51.00</a>
            </p>
            <p class='status'>Raised 4% from USD 49.00</p>
          </li>
          {/* end 3 */}
          <li>
            <p class='sector'>Price (23-Jan-2019)</p>
            <p class='sector-rating'>
              <a href='#0'>USD 48.34</a>
            </p>
          </li>

          <li>
            <p class='sector'>Potential Upside/Downside</p>
            <p class='sector-rating'>
              <a href='#0'>+6.2%</a>
            </p>
          </li>

          <li>
            <p class='sector'>Tickers</p>
            <p class='sector-rating'>
              <a href='#0'>MDLZ</a>
            </p>
          </li>
          {/* end 6 */}
          <li>
            <p class='sector'>Market Cap (USD mn)</p>
            <p class='sector-rating'>
              <a href='#0'>69378</a>
            </p>
          </li>

          <li>
            <p class='sector'>Shares Outstanding (mn)</p>
            <p class='sector-rating'>
              <a href='#0'>1444.17</a>
            </p>
          </li>

          <li>
            <p class='sector'>Free Float (%)</p>
            <p class='sector-rating'>
              <a href='#0'>99.65</a>
            </p>
          </li>

          <li>
            <p class='sector'>52 Wk Avg Daily Volume (mn)</p>
            <p class='sector-rating'>
              <a href='#0'>7.9</a>
            </p>
          </li>

          <li>
            <p class='sector'>52 Wk Avg Daily Value (USD mn)</p>
            <p class='sector-rating'>
              <a href='#0'>N/A</a>
            </p>
          </li>

          <li>
            <p class='sector'>Dividend Yield (%)</p>
            <p class='sector-rating'>
              <a href='#0'>2.2</a>
            </p>
          </li>
          {/* end 12 */}
          <li>
            <p class='sector'>Return on Equity TTM (%)</p>
            <p class='sector-rating'>
              <a href='#0'>2.2</a>
            </p>
          </li>
          <li>
            <p class='sector'>Current BVPS (USD)</p>
            <p class='sector-rating'>
              <a href='#0'>17.67</a>
            </p>
          </li>

          <li class='source'>Source: Refinitiv</li>

          {/* end 15 */}

          <li>
            <p class='sector'>Price Performance</p>
            <p class='sector-rating'>
              <a href='#0'>Exchange-Nasdaq</a>
            </p>
          </li>
          <li>
            <p class='sector'>52 Week range</p>
            <p class='sector-rating'>
              <a href='#0'>USD 48.46-37.42</a>
            </p>
          </li>

          <li class='eqchart'>
            <img src='img/eqchart.png' alt='' />
          </li>

            <li class='source'>Link to Barclays Live for interactive charting</li>
            </ul>
            <table style={{ border: "none" }}>
              <tr style={{ textAlign: "right" }}>
                <button>FLT Page</button>
              </tr>
            </table>
          </div>

          <li>
            <p className='sector'>
              <a href='#!'>Global Payments Inc. (GPN)</a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>

          <li>
            <p className='sector'>
              <a href='#!'>MasterCard Inc. (MA)</a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>

          <li>
            <p className='sector'>
              <a href='#!'>Paychex, Inc. (PAYX)</a>
            </p>
            <p className='sector-rating'>
              <a href='#0'>NEUTRAL</a>
            </p>
            <p className='status'>Unchanged</p>
          </li>
        </ul>

        <p className='full-ratings'>
          For a full list of our ratings, price target and earnings changes in
          this report, click <a href='#eqdatatable'>here</a>.
        </p>
      </div>
    );
  }
}

export default MultiCompanyData;
