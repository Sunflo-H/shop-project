import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './css/reset.css';
import styles from './App.module.css';
import data from './data.js';

import Jumbotron from './component/MainJumbotron';
import Card from './component/CardList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
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
    let newTshirts = tshirts.filter((tshirt,i) => (totalCount-i) <= (totalCount - COUNT ));
    return newTshirts;
  }
  return (
    <div className={styles.App}>
      {/* 헤더 */}
      <header>
        <div className={styles.logo}><Link to={'/'}>T SHOP</Link></div>
        <div className={styles.menu}>
          <ul>
            <li><Link to={'/new'}>New</Link></li>
            <li><Link to={'/woman'}>Woman</Link></li>
            <li><Link to={'/man'}>Man</Link></li>
          </ul>
        </div>
        <div className={styles.login}>
          <FontAwesomeIcon icon={faCircleUser} className={styles.userIcon} />
          <span>Log In</span>
        </div>
      </header>

      <Route exact path={"/"}>
      {/* 메인 */}
        <Jumbotron></Jumbotron>
        <Card tshirts={getNewTshirts()}></Card>
        <Sale></Sale>
      
      </Route>
      <Route path="/:category">
          <SubPage tshirts={tshirts}></SubPage>
      </Route>
      {/* 푸터 */}
      {/* <Footer></Footer>   */}
    </div>
  );
}



export default App;
