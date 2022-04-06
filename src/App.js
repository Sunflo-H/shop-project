import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './css/reset.css';
import styles from './App.module.css';
import data from './data.js';

import Header from './component/Header';
import Home from './component/Home';
import Jumbotron from './component/MainJumbotron';
import CardList from './component/CardList';
import SubPage from './component/SubPage';
import Sale from './component/Sale';
import Detail from './component/Detail';
import Footer from './component/Footer';


function App() {
  let [tshirts, setTshirts] = useState(data);

  function getNewTshirts() {
    let totalCount = tshirts.length;
    const COUNT = 8;
    let newTshirts = tshirts.filter((tshirt, i) => (totalCount - i) <= (totalCount - COUNT));
    return newTshirts;
  }
  return (
    <div className={styles.App} oncopy="return false" oncut="return false" onpaste="return false">

      

      <main>
        <Switch>
          <Route exact path={"/"} >
            <Header />
            <Home getNewTshirts={getNewTshirts}/>
          </Route>

          <Route path="/:category/detail/:id">
            <Header />
            <Detail tshirts={tshirts}/>
          </Route>
          
          <Route path="/:category">
            <Header />
            <SubPage tshirts={tshirts} />
          </Route>

          <Route path="signUp">
            <SignUp />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
