import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import Test from './component/Test';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      {/* <Test></Test> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
