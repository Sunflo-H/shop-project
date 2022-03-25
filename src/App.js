import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './css/reset.css';
import styles from './App.module.css';
import data from './data.js';

import Header from './component/Header';
import Jumbotron from './component/MainJumbotron';
import Card from './component/CardList';
import Test from './component/Test';
import Test2 from './component/Test2';
import Test3 from './component/Test3';
import SubPage from './component/SubPage';
import Sale from './component/Sale';


function App() {
  let [tshirts, setTshirts] = useState(data);

  function getNewTshirts() {
    let totalCount = tshirts.length;
    const COUNT = 8;
    let newTshirts = tshirts.filter((tshirt, i) => (totalCount - i) <= (totalCount - COUNT));
    return newTshirts;
  }
  return (
    <div className={styles.App}>

      <Route exact path={"/"}>
        <Header />
        <Jumbotron></Jumbotron>
        <Card tshirts={getNewTshirts()}></Card>
        <Sale></Sale>

      </Route>
      <Route path="/:category">
        <Header />
        <SubPage tshirts={tshirts}></SubPage>
      </Route>
      {/* 푸터 */}
      {/* <Footer></Footer>   */}
    </div>
  );
}



export default App;
