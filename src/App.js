import React, { Component } from "react";

import Meta from "./meta/Meta";
import Body from "./body/Body";

class App extends Component {
  render() {
    return (
      <div class='content__main-column '>
        <div class='content__article-body'>
          <Meta />
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
