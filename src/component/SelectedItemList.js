import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from '../css/SelectedItemList.module.css';


const SelectedItem = ({ max, size , removeItem, price, setTotalCount}) => {
    console.log(size + '사이즈를 렌더링 했습니다.');
    const [num, setNum] = useState(1);
    function onChange(event) {
        event.target.value = event.target.value.replace(/[^1-9.]/g, '').replace(/(\..*)\./g, '$1');
        setNum(event.target.value);
        if(typeof(event.target.value) !== NaN) setTotalCount(Number(event.target.value));
    }

    function onIncrease() {
        // console.log(num);
        // if(num+1 > max) {
        //     return;
        // }
        setTotalCount('plus');
        setNum(num+1);
    }

    function onDecrease() {
        // if(num-1 < 1) {
        //     return;
        // }
        setTotalCount('minus');
        setNum(num-1);
    }

    return (
        <div className={styles.itemContainer}>
            <div className={styles.size}>
                <span>{size}</span>
            </div>
            <div  className={styles.numContainer}>
                <div className={styles.minus} onClick={onDecrease}>
                    <FontAwesomeIcon icon={faMinus} size='1x'/>
                </div>
                <input 
                    type='text' 
                    value={num} 
                    onChange={onChange}
                >
                </input>
                <div className={styles.plus} onClick={onIncrease}>
                    <FontAwesomeIcon icon={faPlus} size='1x'/>
                </div>
            </div>
            <div className={styles.price}>{price * num}원</div>
            <div className={styles.delete}  onClick={()=>removeItem(size)}>
                X
            </div>
        </div>
    )
}

const SelectedItemList = ({ max, sizes, removeItem, price, totalCount, setTotalCount}) => {
    if(sizes.length === 0){
        return null;
    } else {
        return sizes.map((size, index) => {
                return (
                    <React.Fragment key={index}>
                        <SelectedItem 
                            max={max} 
                            size={size} 
                            price={price} 
                            totalCount={totalCount} 
                            removeItem={removeItem} 
                            setTotalCount={setTotalCount}
                        />
                    </React.Fragment>
                )
            });
    }
}

export default SelectedItemList;