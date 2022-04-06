import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const SelectedItem = ({ max, size , removeItem}) => {
    console.log(size);
    // const [num, setNum] = useState(item.num);
    const [num, setNum] = useState(1);
    function onChange(event) {
        setNum(event.target.value);
    }
    return (
        <div>
            <div>{size}</div>
            <div>
                <FontAwesomeIcon icon={faSquareMinus} />
                <input type='text' value='1' onChange={onChange}></input>
                <FontAwesomeIcon icon={faSquarePlus} />
            </div>
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={()=>removeItem(size)} />
            </div>
        </div>
    )
}

const SelectedItemList = ({ max, sizes, removeItem }) => {
    console.log(sizes[0]);
    if(sizes[0] === undefined){
        console.log("사이즈 아이템 배열의 첫 값이 undefined입니다.");
        return null;
    } else {
        return sizes.map((size, index) => {
                return (
                    <React.Fragment key={index}>
                        <SelectedItem max={max} size={size} removeItem={removeItem}/>
                    </React.Fragment>
                )
            });
    }
}

export default SelectedItemList;