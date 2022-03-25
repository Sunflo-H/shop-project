import React from "react";
import styles from "../css/Footer.module.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className={styles.myInfo}>
                <div className={styles.myInfoWrapper}>
                    <p>T SHOP - PROJECT</p>
                    <p>sunflo0524@gmail.com</p>
                    <div className={styles.iconWrapper}>
                        <a href="https://github.com/Sunflo-H">
                            <img src="assets/img/github-logo.png"></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;