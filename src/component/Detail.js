import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {category, key} = useParams();
    return (
        <>
            <h1>{category}</h1>
            <h1>{key}</h1>
        </>
    )
}

export default Detail;