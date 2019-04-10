import React, { Component } from "react";
import Toc from "./Toc";
import Main from "./Main";

class Head extends Component {

  render() {
    const data = this.props.data;
    return (
      <header className="content__head">
        <div className="content__header tonal__header u-cf">
          <div className="gs-container">
            <div className="content__main-column">
              <Toc data={data} />
              <Main data={data} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Head;
