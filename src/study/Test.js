import React, {useMemo, useState, useEffect} from 'react';

function getLength(arr) {
    console.log("길이를 구하는 함수가 실행되버렸!");
	return arr.length
}

function Test() {
	const [arr, setArr] = useState([1,2,3,4,5]);
	const [input, setInput] = useState('');
	
	// const count = getLength(arr);
    const count = useMemo(() => getLength(arr), [arr]);

    const arrPush = () => {
        setArr([...arr, input]);
    }

    const arrReplace = () => {
        let newArr = [...arr];
        newArr[count-1] = input;
        setArr(newArr);
    }
	const onChange = e => {
        setInput(e.target.value);
    }
    console.log("렌더링");
	return (
        <>
            <input type='text' onChange={onChange} value={input}/>
            <button onClick={arrPush}>추가하기</button>
            <button onClick={arrReplace}>대체하기</button>
            <span>{count}</span>
        </>
	)
}

export default Test;