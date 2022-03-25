import React, {useState, useEffect} from "react";
import axios from "axios";

function Tshirts() {
    const [tshirts, setTshirts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        // console.log(tshirts);
        // async function fetchTshirts() {
        //     try {
        //         setTshirts(null);
        //         setError(null);

        //         setLoading(true);
        //         const response = await axios.get('')
        //     }
        // }
    },[])

    return (
        <>
        </>
    )
}