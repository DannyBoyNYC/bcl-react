import React, { Component } from "react";
import Analyst from "./sub/Analyst";

class BylineLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuthor: false,
      tocCoords: ""
    };
    this.openAuthor = this.openAuthor.bind(this);
  }

  openAuthor(event) {
    event.preventDefault();
    // const tocRef = this.refs.menu;
    // const tocContainer = this.refs.tocContainer;
    // const coords = ReactDOM.findDOMNode(tocContainer).getBoundingClientRect().height;
    // tocRef.style.top = coords + 'px';
    // tocRef.classList.toggle('toc__open');
    // this.setState(state => ({
    //   showMenu: !state.showMenu,
    //   tocCoords: coords,
    // }));
  }

  render() {
    const data = this.props.data;
    return (
      <div className='byline-lg byline'>
        <ul>
          {Object.keys(data.analysts).map(key => (
            <Analyst key={key} index={key} analyst={data.analysts[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BylineLarge;
