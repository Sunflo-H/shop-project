import React from "react";
import styles from '../css/Header.module.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
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
    )
}

export default Header;