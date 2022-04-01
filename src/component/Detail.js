import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";

import styles from '../css/Detail.module.css'

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1); 
}

const Detail = ({tshirts}) => {
    const {category, id} = useParams();
    const [tshirt, setTshirt] = useState(()=>getTshirts());

    function getTshirts() {
        return tshirts.find(tshirt => tshirt.id === Number(id));
    }

    
    return (
        <div className={styles.detailContainer}>
            <div className={styles.wrapper}>
                <div className={styles.linkContainer}>
                    <Link to={'/'}>Home</Link>
                    <span>&nbsp;&gt;&nbsp;</span>
                    <Link to={`/${category}`}>{capitalize(category)}</Link>
                </div>

                <div className={styles.nameContainer}>
                    <div>
                        <span>{tshirt.name}</span>
                    </div>
                </div>
                
                <div className={styles.infoContainer}>
                    <div className={styles.imageContainer}>
                        <img src={tshirt.src}></img>
                    </div>
                    <div className={styles.textContainer}>
                        <p>Product Info <span>제품정보</span></p>
                        <p>이름 </p>
                        <p>성별</p>
                        <p>제품 설명</p>
                        <p>가격</p>
                        <p>개수</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <h1>{category}</h1>
                <h1>{id}</h1>
                <h1>{tshirt.name}</h1>
            </div>
        </div>
    )
}

export default Detail;