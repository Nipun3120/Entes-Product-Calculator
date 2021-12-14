import { useDispatch } from "react-redux";
import { apfcActions } from "../../store/apfcSlice";

export const ApfcItem = (props)=> {
    const dispatch = useDispatch();
    const {id, type, noOfSteps, model, quantity} = props;
    

    const decreaseQuantity = ()=> {
        console.log(id)
        dispatch(apfcActions.decreaseItem(id))

    }
    return (
        <div>
            {/* {id !== 0 && id} */}
            <div>
                {type !=='' && <p>Type of apfc: {type}</p>}
            </div>
            <div>
                {noOfSteps !=='' && <p>Number Of Steps: {noOfSteps}</p>}
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
