import {useState} from 'react';
import styles from '../css/Jumbotron.module.css';
import data from '../jumbotronData';
function Jumbotron() {
    let [image, setImage] = useState(data);
    return (
        <div className={styles.jumbotron}>
            <div className={styles.textContainer}>
                <p>T SHOP</p>
                <div>There’s One for Everyone</div>
            </div>
            <div className={styles.imgContainer}>
                <div><img src={image[0].src}></img></div>
                <div><img src={image[1].src}></img></div>
                <div><img src={image[2].src}></img></div>
            </div>
        </div>        
    );
}

export default Jumbotron;