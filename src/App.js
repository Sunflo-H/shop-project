import React, { useState } from 'react';
import './css/reset.css'
import styles from './App.module.css';
import data from './data.js';
import 카드리스트 from './component/Cardlist.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

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
      {/* <점보></점보> */}
      <카드리스트 tshirt = {tshirt}></카드리스트>
    </div>
  );
}
// 카드 리스트들이 쫘악 있는 컴포넌트가 있고!
// 그 안에서 카드컴포넌트들 호출하는 형태로 만들어보자
// ul li 형태로 만들면 컴포넌트를 li에 넣을수 있겠지??



export default App;
