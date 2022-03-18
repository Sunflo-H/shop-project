import React, { useState } from 'react';
import './css/reset.css';
import styles from './App.module.css';
import data from './data.js';

import Jumbotron from './component/Jumbotron';
import Card from './component/Cardlist';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  let [tshirt, setTshirt] = useState(data);

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
      <Jumbotron></Jumbotron>
      <Card tshirt = {tshirt}></Card>
    </div>
  );
}



export default App;
