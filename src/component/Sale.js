import styles from '../css/Sale.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt,faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import React from 'react';
function Sale() {
    return (
        <div className={styles.saleContainer}>
            <div className={styles.containerTop}>
                <div className={styles.textContainer}>
                    <div>
                        <p><FontAwesomeIcon icon={faBolt} className={styles.boltIcon} /></p>
                        <p className={styles.text}>SALE IS ON!</p>
                        <p className={styles.highLight}>25% OFF</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={'assets/img/sale.jpg'}></img>
                </div>
            </div>
            <div className={styles.containerBottom}>
                <div>
                    <FontAwesomeIcon icon={faArrowRightLong} className={styles.rightArrow}/>
                    <span><Link to="/woman">GET 25% OFF WOMEN'S T-SHIRTS</Link></span>
                    <FontAwesomeIcon icon={faArrowLeftLong} className={styles.leftArrow}/>
                </div>
            </div>
        </div>
    )
}

export default Sale;