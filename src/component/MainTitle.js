import React from "react";
import styles from '../css/MainTitle.module.css';

const MainTitle = ({ title, subTitle }) => {
    return (
        <div className={styles.textContainer}>
            <p>{title}</p>
            <div>
                {subTitle}
                <div className={styles.blindContainer}></div>
            </div>
        </div>
    )
}

export default MainTitle;