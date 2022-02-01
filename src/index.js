import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import reportWebVitals from './reportWebVitals';
import App from './containers/App/App'
import {Router, browserHistory} from '@version/react-router-v3';
import router from './router'
// import { createBrowserHistory } from 'history'

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={router}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
  // <React.StrictMode>
    /* <App /> */
  /* </React.StrictMode>, */