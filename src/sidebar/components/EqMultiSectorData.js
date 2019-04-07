import React, { Component } from 'react';

class MultiSectorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubStats: false,
      showCompanies: false,
    };
    this.openStats = this.openStats.bind(this);
    this.openCompanies = this.openCompanies.bind(this);
  }

  openStats(event) {
    event.preventDefault();
    const tocRef = this.refs.stats;
    tocRef.classList.toggle('stats__open');
    this.setState(state => ({
      showMenu: !state.showSubStats,
    }));
  }

  openCompanies(event) {
    event.preventDefault();
    const coRef = this.refs.companies;
    coRef.classList.toggle('companies__open');
    this.setState(state => ({
      showMenu: !state.showCompanies,
    }));
  }

  render() {
    return (
      <div className="ratings multisector">
        <ul className="eqdata__ratings">
          <li className="eqdata__eqassetclass sector">
            <a href="!0" className="sector" onClick={this.openCompanies}>
              Americas Integrated Oil
            </a>
            <p className="sector-rating">
              <a href="#0">POSITIVE</a>
            </p>
            <p className="status">Unchanged</p>
            <ul className="eqdata__ratings-companies">
              <li ref="companies">
                <p className="sector">
                  <a href="#!" onClick={this.openStats}>
                    Fleetcor Technologies (FLT)
                  </a>
                </p>
                <p className="sector-rating">POS</p>
                <p className="status">Unchanged</p>
              </li>
              <li ref="companies">
                <p className="sector">
                  <a href="#!" onClick={this.openStats}>
                    Fleetcor Technologies (FLT)
                  </a>
                </p>
                <p className="sector-rating">POS</p>
                <p className="status">Unchanged</p>
              </li>
              <li ref="companies">
                <p className="sector">
                  <a href="#!" onClick={this.openStats}>
                    Fleetcor Technologies (FLT)
                  </a>
                </p>
                <p className="sector-rating">POS</p>
                <p className="status">Unchanged</p>
              </li>
            </ul>
          </li>

          <li className="eqdata__eqassetclass">
            <a href="!0" className="sector" onClick={this.openCompanies}>
              European Integrated Oil & Refining
            </a>
            <p className="sector-rating">
              <a href="#0">POSITIVE</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          <li className="eqdata__eqassetclass">
            <a href="!0" className="sector" onClick={this.openCompanies}>
              U.S. Independent Refiners
            </a>
            <p className="sector-rating">
              <a href="#0">POSITIVE</a>
            </p>
            <p className="status">Unchanged</p>
          </li>

          {/* hidden activated by link above */}
          <div className="sub-stats" ref="stats">
            <ul>
              <li>
                <p className="sector">Industry View</p>
                <p className="sector-rating">
                  <a href="#0">NEUTRAL</a>
                </p>
                <p className="status">Unchanged</p>
              </li>

              <li>
                <p className="sector">Price Target</p>
                <p className="sector-rating">
                  <a href="#0">USD 51.00</a>
                </p>
                <p className="status">Raised 4% from USD 49.00</p>
              </li>
              {/* end 3 */}
              <li>
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
              </li>
              {/* end 6 */}
              <li>
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
              </li>
              {/* end 12 */}
              <li>
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

              <li className="source">Source: Refinitiv</li>

              {/* end 15 */}

              <li>
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
              </li>

              <li className="eqchart">
                <img src="img/eqchart.png" alt="" />
              </li>

              <li className="source">
                Link to Barclays Live for interactive charting
              </li>
            </ul>
            <button>FLT Page</button>
          </div>
        </ul>

        <p className="full-ratings">
          For a full list of our ratings, price target and earnings changes in
          this report, click <a href="#eqdatatable">here</a>.
        </p>
      </div>
    );
  }
}

export default MultiSectorData;
