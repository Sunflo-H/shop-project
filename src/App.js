import React, { useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './css/reset.css';
import styles from './App.module.css';
import data from './data.js';

import Jumbotron from './component/Jumbotron';
import Card from './component/Cardlist';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  let [tshirt, setTshirt] = useState(data);
  let [time, setTime] = useState(1);
  console.log({time});
  let inputChangeHandler = (e) => {
    const updatedKeyword = e.target.value;
  }
  return (
    <div className={styles.App}>
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
            <FontAwesomeIcon icon={faCircleUser} className={styles.userIcon}/>
            <span>Log In</span>
          </div>
      </header>
      <Route exact path={"/"}>
        <Jumbotron></Jumbotron>
        <Card tshirt = {tshirt}></Card>
      </Route>

      <Route path={"/woman"}>
        <h1>여자 옷 페이지입니다.</h1>
        <input 
          type="text" 
          defaultValue={time}
          onChange={(e) => inputChangeHandler}/>
        <button onClick={
          function() {
            setTime(time+1);
          } 
        }>update</button>
      </Route>
    </div>
  );
}



export default App;
