import React, { Component } from 'react';

class ListUnordered extends Component {
  render() {
    return (
      <ul>
        <li>
          CDS options are available for the following CDS indices: CDX.IG and
          CDX.HY in the US; and iTraxx Main; iTraxx Crossover; and iTraxx Senior
          Financial in Europe.
          <ul>
            <li>
              CDS Option Basics. We introduce the basic terminology for CDS
              options (more commonly referred to as ‘payers’ and ‘receivers’)
              and review their payoff profiles at expiry. We also review
              quotation and trading mechanics and break down the componentsof a
              sample CDS option run.
              <ul>
                <li>
                  CDS Option Basics. We introduce the basic terminology for CDS
                  options (more commonly referred to as ‘payers’ and
                  ‘receivers’) and review their payoff profiles at expiry. We
                  also review quotation and trading mechanics and break down the
                  componentsof a sample CDS option run.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          CDS Option Basics. We introduce the basic terminology for CDS options
          (more commonly referred to as ‘payers’ and ‘receivers’) and review
          their payoff profiles at expiry. We also review quotation and trading
          mechanics and break down the componentsof a sample CDS option run.
        </li>
        <li>
          Common Trades. We review a large range of CDS option trades, covering
          hedging of existing index positions, implementing more efficient
          directional trades than is possible with an index trade, and we
          discuss how CDS options can be used to implement very specific
          relative value views between, for example, high grade and high yield.
        </li>
      </ul>
    );
  }
}

export default ListUnordered;
