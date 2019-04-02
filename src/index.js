import React from 'react';
import ReactDOM from 'react-dom';
import Head from './head/Head';
import App from './body/App';
import Sidebar from './sidebar/Sidebar';
import Meta from './meta/Meta';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(<Meta />, document.getElementById('meta'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
