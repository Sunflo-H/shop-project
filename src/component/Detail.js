import React, { useState, useReducer } from "react";
import { useParams, Link } from "react-router-dom";

import styles from '../css/Detail.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import SelectedItemList from "./SelectedItemList";
import OptionList from "./OptionList";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const initialState = {
    size: '옵션 선택',
    sizes: [],
    totalCount: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SIZE':
            return {
                ...state,
                size: action.size,
                totalCount: state.totalCount + 1
            }
        case 'ADD_ITEM':
            let findSize = state.sizes.find((size) => size === action.size);
            if (findSize === undefined) {
                return {
                    ...state,
                    sizes: [...state.sizes, action.size]
                }
            } else {
                return { ...state };
            }

        case 'REMOVE_ITEM':
            let newSizes = state.sizes.filter((size) => size !== action.size);
            return {
                ...state,
                sizes: newSizes
            }

        case 'PLUS_TOTAL_COUNT':
            return {
                ...state,
                totalCount: state.totalCount + 1
            }

        case 'MINUS_TOTAL_COUNT':
            return {
                ...state,
                totalCount: state.totalCount - 1
            }
        
        case 'DIRECT_SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.order
            }
    }
}

const Detail = ({ tshirts }) => {
    const { category, id } = useParams();
    const [tshirt, setTshirt] = useState(() => getTshirts());

    const [state, dispatch] = useReducer(reducer, initialState);

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

    function onChangeSelectedSize(event) {
        const size = event.target.value;
        if (size === '옵션 선택') return;
        dispatch({
            type: 'CHANGE_SIZE',
            size
        });
        addItem(size);
    }

    function addItem(size) {
        dispatch({
            type: 'ADD_ITEM',
            size
        });
    }

    function removeItem(size) {
        dispatch({
            type: 'REMOVE_ITEM',
            size
        });
    }

    function setTotalCount(order) {
        if(order === 'plus')
            dispatch({
                type: 'PLUS_TOTAL_COUNT',
            });
        else if(order === 'minus')
            dispatch({
                type: 'MINUS_TOTAL_COUNT',
            });
        else if(typeof(order) !== NaN)
            dispatch({
                type: 'DIRECT_SET_TOTAL_COUNT',
                order
            })
    }

    console.log(state);
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

                        <table>
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
                                {/* <tr>
                                    <td>재고</td>
                                    <td>{tshirt.stock}</td>
                                </tr> */}
                            </tbody>
                        </table>

                        <div className={styles.cartContainer}>
                            <div className={styles.select} >
                                {/* select에 value 있었는데 reducer로 바꾼 지금 value 있어야하나??? */}
                                <select onChange={onChangeSelectedSize}>
                                    <OptionList size={tshirt.size} />
                                </select>
                            </div>
                            <div className={styles.selectedItemListContainer}>
                                <SelectedItemList 
                                    max={tshirt.stock} 
                                    price={tshirt.price} 
                                    sizes={state.sizes} 
                                    totalCount={state.totalCount} 
                                    removeItem={removeItem} 
                                    setTotalCount={setTotalCount}
                                />
                            </div>
                            <div className={styles.total}>
                                <div>총 상품 금액</div>
                                <div>{tshirt.price * state.totalCount}원</div>
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