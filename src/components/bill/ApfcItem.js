import { Box, Container, TableCell, TableRow, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { apfcActions } from "../../store/apfcSlice";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './bill.css';

export const ApfcItem = (props)=> {
    const dispatch = useDispatch();
    const contCount = useSelector(state=> state.contactorState.totalQuantity);
    const {id, type, noOfSteps, model, quantity, price} = props;
    

    const decreaseQuantity = ()=> {
        dispatch(apfcActions.decreaseItem(id))
    }
    return (
        <>
            <TableRow>
                <TableCell>
                    {model!== '' &&<Typography className="mobileFontBillItem">{model}</Typography>}
                </TableCell>
                <TableCell>
                    {type !=='' && <Typography className="mobileFontBillItem">{type}</Typography>}
                </TableCell>
                <TableCell>
                    {noOfSteps !=='' && <Typography className="mobileFontBillItem">{noOfSteps}</Typography>}
                </TableCell>
                <TableCell className="mobileFontBillItem">
                    {price}
                </TableCell>
                <TableCell>
                    {quantity !== '' && 
                        <Typography>{quantity} 
                        <ArrowDownwardIcon onClick={decreaseQuantity} style={{position:'absolute', cursor:'pointer'}} className="mobileFontBillItem"/>
                        
                            {/* <span onClick={decreaseQuantity} 
                                style= {{
                                    marginLeft:'20px', 
                                    textDecoration: 'underline', 
                                    cursor:'pointer'
                                }}>
                                (remove)
                            </span> */}
                        </Typography>
                    }
                </TableCell>

            </TableRow>
        </>
    )
}
