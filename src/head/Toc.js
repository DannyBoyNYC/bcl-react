import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// https://reactjs.org/docs/react-dom.html#finddomnode
// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
// https://www.reddit.com/r/reactjs/comments/a2ifb9/getboundingclientrect_does_not_work_on_a_react/

class Toc extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: true, 
      tocCoords: '' };
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
    const data = this.props.data;
    return (
      <div className="toc">
      {/* tocContainer ref */}
        <div className="toc-container" ref="tocContainer">
          <a className="menu-bug" href="#!" onClick={this.openMenu}>
            <svg className="icn">
              <title>Table of contents</title>
              <use xlinkHref="#toc" />
            </svg>
          </a>
          <div className="toc__elements">
            <a className="toc__branding-type" href="#0 ">
              {data.brandingtype}
            </a>
            <a className="toc__theme" href="#0 ">
              {data.hashtag}
            </a>
            {/* displayed on top menu? */}
            <a className="toc__series" href="#0 ">
            </a>
          </div>

          {/* menu ref */}
          <div className="toc__toc" ref="menu">
            <ul>
              <li className="sect">
                <a href="#0">{data.assetClass}</a>
              </li>
              <li>
                <a href="#0">{data.headline}</a>
              </li>

              <li>
                <a href="#0">Header One</a>
                <ul className="switch-cont">
                  <li>
                    <a href="#0">Header Level Two</a>
                  </li>
                  <li>
                    <a href="#0">Header Level Two</a>
                  </li>
                  <li>
                    <a href="#0">Header Level Two</a>
                  </li>
                </ul>
                <a href="#0">Header Two</a>
                <ul className="switch-cont">
                  <li>
                    <a href="#0">Header Level Two</a>
                  </li>
                </ul>
              </li>
              <li className="sect">
                <a href="#0">Section</a>
              </li>
              <li>
                <a href="#0">Header Level Two</a>
              </li>
              <li className="sect">
                <a href="#0">Section Two</a>
              </li>
              <li>
                <a href="#0">Header Level Two?</a>
              </li>
              <li className="sect">
                <a href="#0">Section</a>
              </li>
              <li>
                <a href="#0">Header Level One</a>
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
