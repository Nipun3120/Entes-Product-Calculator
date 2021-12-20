import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";
// import { apfcDataActions } from "../store/apfcDataSlice";

export const Apfc = ()=> {
    const [data, setDate] = useState([]);
    const getData = async()=> {
        const apfcdata = await axios({
            method: 'GET',
            url: 'http://localhost:3120/products/apfc'
        })
        const data = await apfcdata.data;
        setDate(data);
    }
    useEffect(()=> {
        getData();
    }, [])

    console.log(data)
    return (
        <>  
            <h1>HI</h1>
            {data.map((item, index)=> (
                <>
                    <p>{item.model}</p>
                    <p>{item.type}</p>
                    <p>{item.noOfSteps}</p>
                </>
                )
            )}
        </>
    )
}