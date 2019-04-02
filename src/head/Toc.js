import React, { Component } from 'react';

class Toc extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, tocCoords: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const tocRef = this.refs.menu;
    const def1 = tocRef.getBoundingClientRect();
    const coords = def1.height;
    tocRef.classList.toggle('toc__open');
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      tocCoords: coords,
    }));
  }

  // function activateToc() {
  //   const tocCoords = toc.getBoundingClientRect();
  //   const topOfToc = tocCoords.height;
  //   toctoc.style.top = topOfToc + "px";
  //   toctoc.classList.toggle("toc__open");
  // }

  render() {
    return (
      <div className="toc">
        <div className="toc-container">
          <a className="menu-bug" href="#!" onClick={this.handleClick}>
            <svg className="icn">
              <title>Table of contents</title>
              <use xlinkHref="#toc" />
            </svg>
          </a>
          <div className="toc__elements">
            <a className="toc__branding-type" href="#0 ">
              FOCUS
            </a>
            <a className="toc__theme" href="#0 ">
              #theme
            </a>
            <a className="toc__series" href="#0 ">
              US Credit Alpha
            </a>
          </div>

          <div className="toc__toc" ref="menu">
            <ul>
              <li className="sect">
                <a href="../authors6/index.html">US Credit Alpha</a>
              </li>
              <li>
                <a href="../authors6/index.html">Rally Resumed</a>
              </li>

              <li>
                <a href="#0">European Banks: Priced for preference</a>
                <ul className="switch-cont">
                  <li>
                    <a href="#0">Some answers to the big questions</a>
                  </li>
                  <li>
                    <a href="#0">Applied learning</a>
                  </li>
                  <li>
                    <a href="#0">Refreshing Ratings European Banks</a>
                  </li>
                </ul>
                <a href="#0">Section Heading</a>
                <ul className="switch-cont">
                  <li>
                    <a href="#0">Trade ideas</a>
                  </li>
                </ul>
              </li>
              <li className="sect">
                <a href="#0">High Yield</a>
              </li>
              <li>
                <a href="#0">Euro HY valuations through a macro lens</a>
              </li>
              <li className="sect">
                <a href="#0">Investment Grade</a>
              </li>
              <li>
                <a href="#0">
                  Pre-crisis levels may be closer than they appear
                </a>
              </li>
              <li className="sect">
                <a href="#0">CDS Relative Value</a>
              </li>
              <li>
                <a href="#0">Back to sovereign CDS-cash basi(c)s</a>
              </li>
              <li className="sect">
                <a href="#0">Disclosures</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Toc;
