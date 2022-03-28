import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import Test3 from './component/Test3';
import Study from './study/Study';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      {/* <Test3></Test3> */}
      {/* <Study></Study> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
