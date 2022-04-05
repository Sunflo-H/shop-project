import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const SelectedItem = ({ max, item }) => {
    console.log(item);
    const [num, setNum] = useState(item.num);
    function onChange(event) {
        setNum(event.target.value);
    }
    return (
        <div>
            <div>{item.size}</div>
            <div>
                <FontAwesomeIcon icon={faSquareMinus} />
                <input type='text' value={item.num} onChange={onChange}></input>
                <FontAwesomeIcon icon={faSquarePlus} />
            </div>
            <div>
                <FontAwesomeIcon icon={faTrash} />
            </div>

        </div>
    )

}

const SelectedItemList = ({ max, items }) => {
    console.log(items);
    console.log(items.length);
    if(items.length === 0) {
        return null;
    } else {
        return items.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <SelectedItem max={max} item={item} />
                    </React.Fragment>
                )
            });
    }
}

export default SelectedItemList;