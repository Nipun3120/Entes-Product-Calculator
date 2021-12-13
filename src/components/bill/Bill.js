import './bill.css';
import { useSelector } from 'react-redux';
import { BillItem } from '../';

export const Bill = ()=> {
    const apfcState = useSelector(state=> state.apfcState.items);
    const totalBillingAmount = useSelector(state=> state.apfcState.totalAmount);
    const count = useSelector(state=> state.apfcState.itemsCount);
    const contactorState = useSelector(state=> state.contactorState.items);

    return (
        <>
            <div>Your Package</div>
            <p>total apfc items: {count}</p>
            <div style={{borderTop:'1px solid #000'}}>
                <h4>APFC</h4>
                {apfcState.map((item, index) => {
                    return (
                        <div className="bill">
                            <BillItem 
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
                            <BillItem 
                                key={index}
                                id={index}
                                type={item.rating}
                                model={item.model}
                                quantity={item.quantity}
                                noOfSteps=""
                            />
                        </div>
                    )
                })}
            </div>
            
            <div style={{borderTop:'1px solid #000'}}>
                <h4>Total Amount</h4>
                <p>Rs {totalBillingAmount}</p>
            </div>
        </>
    )
}