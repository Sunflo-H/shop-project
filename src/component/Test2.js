import { useState } from "react";

const heavyWork = () => {
    console.log("엄청 무거운 작업");
    return ['김민수','홍길동'];
}

function Test2() {
    const [name, setName] = useState(heavyWork());
    const [input, setInput] = useState('');
    function handleInputChange(e) {
        setInput(e.target.value);
    }
    function handleUpload() {
        // setName([input, ...name]);
        setName( function(prevState) {
            console.log(input);
            console.log(prevState);
            return [input, ...prevState];
        })
    }
    console.log(name);
    console.log(input);
    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange}></input>
            <button onClick={handleUpload}>업로드</button>
            {
                name.map((name, i) => {
                    return (
                        <p key={i} >{name}</p>
                    )
                })
            }
        </div>
    )
}

export default Test2;