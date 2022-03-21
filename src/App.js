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


function App() {
  let [tshirts, setTshirts] = useState(data);
  console.log(tshirts);
  
  return (
    <div className={styles.App}>
      {/* 헤더 */}
      <header>
        <div className={styles.logo}>T SHOP</div>
        <div className={styles.menu}>
          <ul>
            <li>New</li>
            <li>Women</li>
            <li>Men</li>
          </ul>
        </div>
        <div className={styles.login}>
          <FontAwesomeIcon icon={faCircleUser} className={styles.userIcon} />
          <span>Log In</span>
        </div>
      </header>

      {/* 메인 */}
      <Route exact path={"/"}>
        <Jumbotron></Jumbotron>
        <Card tshirts={tshirts}></Card>
      </Route>
      <Route path="/:shopName">
					<SubPage tshirts={tshirts}></SubPage>
      </Route>

      {/* <Route path={"/woman"}>
        <h1>여자 옷 페이지입니다.</h1>
        <SubPage tshirt={tshirt}></SubPage>
      </Route>
      <Route path={"/man"}>
        <h1>남자 옷 페이지입니다.</h1>
        <SubPage></SubPage>
      </Route>

      <Route path={"/new"}>
        <h1>새 옷 페이지입니다.</h1>
        <SubPage></SubPage>
      </Route>


      <Route path={"/test"}>
        <Test></Test>
        <Test2></Test2>
        <Test3></Test3>
      </Route> */}
    </div>
  );
}



export default App;
