import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { 
    FormControl,
    TableCell,
    TableRow,
    TextField
} from '@mui/material';

const ApfcRow = ({id, index, type, noOfSteps, model, price, discount}) => {
    const [updateActive, setUpdateActive] = useState(false);
    const [newPrice, setNewPrice] = useState(price);
    const [newDiscount, setNewDiscount] = useState(discount);
    const navigate = useNavigate();
    const deleteHandler = async ()=> {
        const res = await axios({
            method:"DELETE",
            url:"http://localhost:3120/products/apfc",
            headers: {
                "Content-Type": "Application/json"
            },
            data: {
                type, model, noOfSteps
            }
        })
        window.location.reload(true)
    }
    const onPriceChange = (event)=> {
        setNewPrice(event.target.value)
    }
    const onDiscountChange = (event)=> {
        setNewDiscount(event.target.value)
    }
    const updateHandler = ()=> {
        setUpdateActive(!updateActive) 
    }
    const submitHandler = async ()=> {
        const res = await axios({
            method:'POST',
            url:`http://localhost:3120/products/apfc/${id}`,
            params:id,
            headers: {
                "Content-Type": "Application/json"
            },
            data: {
                type, 
                model, 
                noOfSteps, 
                price: newPrice, 
                discount: newDiscount
            }
        })
        const data = await res.status;
        console.log(data)
        window.location.reload(true)
        setUpdateActive(!updateActive)
    }
    return (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
       <TableCell component="th" scope="row">{type}</TableCell>
       <TableCell>{noOfSteps}</TableCell>
       <TableCell>{model}</TableCell>

       {
           updateActive 
           ? 
            <>
                <TableCell>
                    <input value={newPrice} onChange={onPriceChange} style={{maxWidth: '100px'}} min="10" />
                </TableCell>
                <TableCell>
                    <input value={newDiscount} onChange={onDiscountChange} style={{maxWidth: '30px'}}/>
                </TableCell> 
            </>
           : 
            <>
                <TableCell>{price}</TableCell>
                <TableCell>{discount}</TableCell> 
            </>

       }
                       
       <TableCell style={{textDecoration:'underline', cursor:'pointer', borderRight: '1px solid #000'}} onClick={deleteHandler}>Delete</TableCell>                        
       {
           updateActive 
           ? <TableCell style={{textDecoration:'underline', cursor:'pointer'}} onClick={submitHandler}>Submit</TableCell>
           : <TableCell style={{textDecoration:'underline', cursor:'pointer'}} onClick={updateHandler}>Update</TableCell>                        
       }
       
    </TableRow>
    )
}

export default ApfcRow
