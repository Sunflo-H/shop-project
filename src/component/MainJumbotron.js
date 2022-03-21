import { useState } from 'react';
import styles from '../css/MainJumbotron.module.css';
import data from '../jumbotronData';
import { Route, Link, Switch } from 'react-router-dom';

function Jumbotron() {
    let [image, setImage] = useState(data);
    let [link, setLink] = useState(['/woman','/new','/man']);
    let [shopName, setShopName] = useState(['Shop Woman', 'Shop New', 'Shop Man']);
    console.log(image);
    return (
        <div className={styles.jumbotron}>
            <div className={styles.textContainer}>
                <p>T SHOP</p>
                <div>There’s One for Everyone</div>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.smallImage}>
                    <img src={image[0].src}></img>
                    <Link to="/woman" >
                        <div className={styles.backgroundImage}>
                            <img src='assets/img/background-long.png'></img>
                        </div>
                        <div className={styles.menutext}><span>Shop Women</span></div>
                    </Link>
                </div>
                <div className={styles.bigImage}>
                    <img src={image[1].src}></img>
                    <Link to="/new" >
                        <div className={styles.backgroundImage}>
                            <img src='assets/img/background-long.png'></img>
                        </div>
                        <div className={styles.menutext}><span>Shop New</span></div>
                    </Link>
                </div>
                <div className={styles.smallImage}>
                    <img src={image[2].src}></img>
                    <Link to="/man" >
                        <div className={styles.backgroundImage}>
                            <img src='assets/img/background-long.png'></img>
                        </div>
                        <div className={styles.menutext}><span>Shop Man</span></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;