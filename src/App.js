import React, { Component } from "react";

import Meta from "./meta/Meta";
import Body from "./body/Body";

class App extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Body />
      </div>
    );
  }
}

export default App;
