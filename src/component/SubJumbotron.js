import { useState } from 'react';
import styles from '../css/SubJumbotron.module.css';
import data from '../jumbotronData';
import { Route, Link, Switch } from 'react-router-dom';

function TextJumbotron() {
    // 링크 주소에 따라 보여지는 값을 다르게
    return (
        <div className={styles.jumbotron}>
            <div className={styles.textContainer}>
                <p>T SHOP</p>
                <div>There’s One for Everyone</div>
            </div>
        </div>
    );
}

export default TextJumbotron;