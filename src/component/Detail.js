import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import styles from '../css/Detail.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Detail = ({ tshirts }) => {
    const { category, id } = useParams();
    const [tshirt, setTshirt] = useState(() => getTshirts());
    const [input, setInput] = useState(1);
    const [selected, setSelected] = useState('free');
    const [count, setCount] = useState(0);

    function getTshirts() {
        let tshirt = tshirts.find(tshirt => tshirt.id === Number(id));
        isSale(tshirt);
        return tshirt;
    }

    function isSale(tshirt) {
        if (tshirt.gender === "woman") {
            tshirt.sale = true;
        }
    }

    function onChange(event) {
        setInput(event.target.value);
    }

    function onChangeSelect(event) {
        setSelected(event.target.value);
    }

    return (
        <div className={styles.detailContainer}>
            <div className={styles.wrapper}>
                <div className={styles.historyContainer}>
                    <Link to={'/'}>Home</Link>
                    <span>&nbsp;&gt;&nbsp;</span>
                    <Link to={`/${category}`}>{capitalize(category)}</Link>
                </div>

                <div className={styles.nameContainer}>
                    {
                        tshirt.sale === true ? <div className={styles.sale}>SALE</div> : null
                    }
                    <div className={styles.name}>
                        <span>{tshirt.name}</span>
                    </div>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.imageContainer}>
                        <img src={tshirt.src}></img>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.header}>
                            <p>Product Info <span>제품정보</span></p>
                        </div>

                        <table border="1" >
                            <tbody>
                                <tr>
                                    <td>상품명</td>
                                    <td>{tshirt.name}</td>
                                </tr>
                                <tr>
                                    <td>성별</td>
                                    <td>{tshirt.gender}</td>
                                </tr>
                                <tr>
                                    <td>가격</td>
                                    <td>{tshirt.price}원</td>
                                </tr>
                                <tr>
                                    <td>재고</td>
                                    <td>{tshirt.stock}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className={styles.cartContainer}>
                            <div className={styles.select} onChange={onChangeSelect} value={selected}> 
                                <select>
                                    <option defaultValue="옵션선택">옵션 선택</option>
                                    <option defaultValue="free" >free</option>
                                </select>
                            </div>
                            {
                                selected !== "옵션 선택" ? <SelectedTshirt /> : null
                            }
                            <div className={styles.selectTshirt}>

                            </div>
                            <div className={styles.total}>
                                <div>총 상품 금액</div>
                                <div>0원</div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button>바로구매</button>
                            <button><FontAwesomeIcon icon={faBasketShopping} className={styles.basketIcon} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;