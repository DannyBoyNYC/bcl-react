import React, { Component } from 'react';

class ParagraphFootnote extends Component {
  render() {
    return (
      <p>
        From 2005 to 2012, the average student loan balance rose more than 70
        percent for Americans ages 40 to 49, going from about $16,000 to about
        $28,000, according to data from the Federal Reserve Bank of New York.
        <a className="footnote-link" data-footnote-id="3" href="#fn-3">
          <sup id="ss-3">3</sup>
        </a>
        <span className="footnote-item">
          <span className="footnote-item-inner">
            <span>
              Those figures aren’t adjusted for inflation, but that accounts for
              only about a quarter of the increase according to
              <a href="#0">authorities</a>.
            </span>
          </span>
        </span>
        No economic agent likes uncertainty. They don't invest, they don't hire,
        they don't make decisions in times of uncertainty.
      </p>
    );
  }
}

export default ParagraphFootnote;
