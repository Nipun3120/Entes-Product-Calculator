import './bill.css';
import { useSelector, useDispatch } from 'react-redux';
import { apfcActions } from '../../store/apfcSlice';
import { contactorActions } from '../../store/contactorSlice';
import { ApfcItem } from '../';
import { ContactorItem } from '../';

import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

import './bill.css';

export const Bill = ()=> {
    const dispatch = useDispatch();
    const apfcState = useSelector(state=> state.apfcState.items);    
    const contactorState = useSelector(state=> state.contactorState.items);
    const count = useSelector(state=> state.apfcState.itemsCount);
    const contQuantity = useSelector(state=> state.contactorState.totalQuantity);
    const steps = useSelector(state=> state.apfcState.totalSteps)
    
    // price
    const totalApfcAmount = useSelector(state=> state.apfcState.totalAmount);
    const totalContAmount = useSelector(state=> state.contactorState.totalAmount);
    const apfcDiscountedPrice = useSelector(state=> state.apfcState.discountedAmount);
    const contDiscountedPrice = useSelector(state=> state.contactorState.discountedAmount);

    const clearBillHandler = ()=> {
        dispatch(apfcActions.reset());
        dispatch(contactorActions.reset());
    }

    const submitHandler = ()=> {
        // send data
    }

    return (
        <Container className="billContainer">
            <Typography variant="h4" align="center">Your Package</Typography>
            {/* <p>steps: {steps}</p> */}
            <div className="billApfc"> 
                <Typography variant="h6">APFC</Typography>
                {/* <Typography variant="p">Total Count : {count}</Typography> */}
                <Table aria-label="simple table" style={{marginBottom:'30px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Model</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Steps</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apfcState.map((item, index) => {
                            if((item.type === '' && item.price === 0) || totalApfcAmount === 0)
                            return (<></>)
                        return (
                                <ApfcItem 
                                    key={index}
                                    id={index}
                                    type={item.type} 
                                    model={item.model} 
                                    noOfSteps={item.noOfSteps} 
                                    quantity={item.quantity}
                                    price={item.price}
                                />
                            )
                        })}
                    </TableBody>
                </Table>


            </div>
            
            <div>
                <Typography variant="h6">CONTACTOR</Typography>
                {/* <Typography variant="p">Total Count: {contQuantity}</Typography> */}
                <Table aria-label="simple table" style={{marginBottom:'30px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Model</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contactorState.map((item, index)=> {
                            if((item.type === '' && item.price === 0) || totalContAmount === 0)
                            return (<></>)
                        return (
                            <ContactorItem 
                                key={index}
                                id={index}
                                rating={item.rating}
                                model={item.model}
                                quantity={item.quantity}
                            />
                        )})}

                    </TableBody>
                </Table>

            </div>
            
            <div style={{borderTop:'1px solid #000'}}>

                <h4>Package Price</h4>
                <h4>List Price: Rs. {totalApfcAmount+totalContAmount}</h4>
                <h4>Special Combo price: Rs. {apfcDiscountedPrice + contDiscountedPrice}</h4>
                <p>(You save: Rs. {totalApfcAmount-apfcDiscountedPrice + totalContAmount - contDiscountedPrice})</p>

                <Button variant="outlined" startIcon={<RefreshIcon />} onClick={clearBillHandler}>
                    Reset
                </Button>
                <Button variant="contained" style={{marginLeft: '20px'}} onClick={submitHandler}>
                    Send response
                </Button>    
            </div>
        </Container>
    )
}