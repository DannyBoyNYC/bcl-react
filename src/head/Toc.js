import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toc extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: true, tocCoords: '' };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    
    const tocRef = this.refs.menu;
    const tocContainer = this.refs.tocContainer;
    const coords = ReactDOM.findDOMNode(tocContainer).getBoundingClientRect().height;
    tocRef.style.top = coords + 'px';
    tocRef.classList.toggle('toc__open');
    this.setState(state => ({
      showMenu: !state.showMenu,
      tocCoords: coords,
    }));
  }

  render() {
    return (
      <div className="toc">
        <div className="toc-container" ref="tocContainer">
          <a className="menu-bug" href="#!" onClick={this.openMenu}>
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

          {/* menu ref */}
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
