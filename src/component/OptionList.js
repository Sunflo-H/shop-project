import React from "react";

const OptionList = ({ size }) => {
    return (
        <>
            <option defaultValue="옵션선택">옵션 선택</option>
            {size.map((size, index) => <option defaultValue={size} key={index}>{size}</option>)}
        </>
    )
}

export default OptionList;