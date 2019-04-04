import React from "react";
import ReactDOM from "react-dom";

import Head from "./head/Head";
import Body from "./body/Body";
import Sidebar from "./sidebar/Sidebar";
import Meta from "./meta/Meta";

ReactDOM.render(<Head />, document.getElementById("head"));
ReactDOM.render(<Meta />, document.getElementById("meta"));
ReactDOM.render(<Body />, document.getElementById("body"));
ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
