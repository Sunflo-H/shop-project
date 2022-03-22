import { useState } from 'react';
import styles from '../css/SubJumbotron.module.css';
import data from '../jumbotronData';
import { Route, Link, Switch ,useParams } from 'react-router-dom';

function TextJumbotron(props) {
    // 링크 주소에 따라 보여지는 값을 다르게
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className={styles.jumbotron}>
            <div className={styles.textContainer}>
                <p>SHOP {capitalize(props.category)}</p>
            </div>
        </div>
    );
}

export default TextJumbotron;