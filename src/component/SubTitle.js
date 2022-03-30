import React from "react";
import styles from '../css/SubTitle.module.css';


const SubTitle = ({title}) => {
    return <p className={styles.subTitle}>{title}</p>
}

export default SubTitle;