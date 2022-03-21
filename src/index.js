import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import Test3 from './component/Test3';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      {/* <Test3></Test3> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
