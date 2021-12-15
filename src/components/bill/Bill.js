import './bill.css';
import { useSelector } from 'react-redux';
import { ApfcItem } from '../';
import { ContactorItem } from '../';

export const Bill = ()=> {
    const apfcState = useSelector(state=> state.apfcState.items);
    const totalApfcAmount = useSelector(state=> state.apfcState.totalAmount);
    const count = useSelector(state=> state.apfcState.itemsCount);
    const contactorState = useSelector(state=> state.contactorState.items);
    const contQuantity = useSelector(state=> state.contactorState.totalQuantity);
    const totalContAmount = useSelector(state=> state.contactorState.totalAmount);
    const apfcDiscountedPrice = useSelector(state=> state.apfcState.discountedAmount);
    const contDiscountedPrice = useSelector(state=> state.contactorState.discountedAmount);

    return (
        <>
            <div>Your Package</div>
            <p>total apfc items: {count}</p>
            <p>total contractor quantity: {contQuantity}</p>
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
                <p>apfc total: {totalApfcAmount}</p>
                <p>discount apfc: {apfcDiscountedPrice}</p>
                
                <p>cont total: {totalContAmount}</p>
                <p>cont discount: {contDiscountedPrice}</p>
                {/* <h4>Total Amount</h4>
                <p>Discount: Rs {totalApfcAmount-apfcDiscountedPrice}</p>
                <p>Rs {apfcDiscountedPrice}</p> */}
                {/* <p>Discount: Rs {totalApfcAmount-apfcDiscountedPrice + totalContAmount - contDiscountedPrice}</p>
                <p>Rs {apfcDiscountedPrice + contDiscountedPrice}</p> */}


                <p>apfc cost: {totalApfcAmount-apfcDiscountedPrice}</p>
                <p>cont cost: {totalContAmount - contDiscountedPrice}</p>

                <p>grand total: {totalApfcAmount-apfcDiscountedPrice + totalContAmount - contDiscountedPrice}</p>

            </div>
        </>
    )
}