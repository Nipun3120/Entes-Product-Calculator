import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { 
    TableCell,
    TableRow,
} from '@mui/material';

const ContRow = ({id, index, model, rating, price, discount}) => {
    const [updateActive, setUpdateActive] = useState(false);
    const [newPrice, setNewPrice] = useState(price);
    const [newDiscount, setNewDiscount] = useState(discount);
    const navigate = useNavigate();
    const deleteHandler = async ()=> {
        const res = await axios({
            method:"DELETE",
            url:"http://localhost:3120/products/contactor",
            headers: {
                "Content-Type": "Application/json"
            },
            data: {
                model, rating
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
            url:`http://localhost:3120/products/contactor/${id}`,
            params:id,
            headers: {
                "Content-Type": "Application/json"
            },
            data: {
                model, 
                rating, 
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
       <TableCell>{model}</TableCell>
       <TableCell>{rating}</TableCell>
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

export default ContRow
