import styles from '../css/Sale.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function Sale() {
    return (
        <div className={styles.saleContainer}>
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
    )
}

export default Sale;