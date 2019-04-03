import React, { Component } from 'react';

class UnorderedList extends Component {
  render() {
    return (
      <ol>
        <li>
          Ordered list styles CDS options are available for the following CDS
          indices: CDX.IG and CDX.HY in the US; and iTraxx Main; iTraxx
          Crossover; and iTraxx Senior Financial in Europe.
          <ol>
            <li>
              CDS Option Basics. We introduce the basic terminology for CDS
              options (more commonly referred to as ‘payers’ and ‘receivers’)
              and review their payoff profiles at expiry. We also review
              quotation and trading mechanics and break down the components of a
              sample CDS option run.
              <ol>
                <li>
                  CDS Option Basics. We introduce the basic terminology for CDS
                  options (more commonly referred to as ‘payers’ and
                  ‘receivers’) and review their payoff profiles at expiry. We
                  also review quotation and trading mechanics and break down the
                  components of a sample CDS option run.
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          CDS Option Basics. We introduce the basic terminology for CDS options
          (more commonly referred to as ‘payers’ and ‘receivers’) and review
          their payoff profiles at expiry. We also review quotation and trading
          mechanics and break down the components of a sample CDS option run.
        </li>
      </ol>
    );
  }
}

export default UnorderedList;
