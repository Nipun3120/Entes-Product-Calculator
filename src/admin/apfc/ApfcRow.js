import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { 
    TableCell,
    TableRow,
} from '@mui/material';

const ApfcRow = ({index, type, noOfSteps, model, price, discount}) => {
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

    return (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
       <TableCell component="th" scope="row">{type}</TableCell>
       <TableCell>{noOfSteps}</TableCell>
       <TableCell>{model}</TableCell>
       <TableCell>{price}</TableCell>
       <TableCell>{discount}</TableCell>                        
       <TableCell style={{textDecoration:'underline', cursor:'pointer'}} onClick={deleteHandler}>Delete</TableCell>                        
    </TableRow>
    )
}

export default ApfcRow
