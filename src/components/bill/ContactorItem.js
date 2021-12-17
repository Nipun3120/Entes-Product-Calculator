import { useDispatch } from "react-redux";
// import { apfcActions } from "../../store/apfcSlice";
import { contactorActions } from "../../store/contactorSlice";

export const ContactorItem = (props)=> {
    const dispatch = useDispatch();
    const {id, rating, model, quantity} = props;
    
    const decreaseQuantity = ()=> {
        dispatch(contactorActions.decreaseItem(id))

    }
    return (
        <div>
            {/* {id !== 0 && id} */}
            <div>
                {rating !=='' && <p>Rating: {rating}</p>}
            </div>
            <div>
                {quantity !== '' && 
                    <p>Quantity: {quantity} <span onClick={decreaseQuantity} style={{marginLeft:'20px', textDecoration: 'underline', cursor:'pointer'}}>(remove)</span></p>
                }
            </div>
            <div>
                {model!== '' &&<p>Model: {model}</p>}
            </div>
        </div>
    )
}