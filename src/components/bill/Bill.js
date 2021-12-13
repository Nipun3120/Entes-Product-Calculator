import './bill.css';
import { useApcfContext } from '../../contexts';
import { useSelector } from 'react-redux';
import { BillItem } from '../';

export const Bill = ()=> {
    const apfcState = useSelector(state=> state.apfcState.items);
    const totalBillingAmount = useSelector(state=> state.apfcState.totalAmount);
    const count = useSelector(state=> state.apfcState.itemsCount);

    return (
        <>
            <div>Price</div>
            <p>total apfc items: {count}</p>
            <div>
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
                <p>Rs {totalBillingAmount}</p>
            </div>
        </>
    )
}