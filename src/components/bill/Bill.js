import './bill.css';
import { useSelector, useDispatch } from 'react-redux';
import { apfcActions } from '../../store/apfcSlice';
import { contactorActions } from '../../store/contactorSlice';
import { ApfcItem } from '../';
import { ContactorItem } from '../';

import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

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
        <>
            <div>Your Package</div>
            <p>total apfc items: {count}</p>
            <p>total contractor quantity: {contQuantity}</p>
            {/* <p>steps: {steps}</p> */}
            <div style={{borderTop:'1px solid #000'}}>
                <h4>APFC</h4>
                {apfcState.map((item, index) => {
                    return (
                        <div className="bill">
                            <ApfcItem 
                                key={index}
                                id={index}
                                type={item.type} 
                                model={item.model} 
                                noOfSteps={item.noOfSteps} 
                                quantity={item.quantity}
                            />
                        </div>
                    )
                })}

            </div>
            
            <div style={{borderTop:'1px solid #000'}}>
                <h4>CONTACTOR</h4>
                {contactorState.map((item, index)=> {
                    return (
                        <div className="bill">
                            <ContactorItem 
                                key={index}
                                id={index}
                                rating={item.rating}
                                model={item.model}
                                quantity={item.quantity}
                            />
                        </div>
                    )
                })}
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
        </>
    )
}