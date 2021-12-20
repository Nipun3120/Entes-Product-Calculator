import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { 
    TableCell,
    TableRow,
} from '@mui/material';

const ContRow = ({index, model, rating, price, discount}) => {
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
        console.log(res)
        window.location.reload(true)
    }

    return (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
       <TableCell>{model}</TableCell>
       <TableCell>{rating}</TableCell>
       <TableCell>{price}</TableCell>
       <TableCell>{discount}</TableCell>                        
       <TableCell style={{textDecoration:'underline', cursor:'pointer'}} onClick={deleteHandler}>Delete</TableCell>                        
    </TableRow>
    )
}

export default ContRow
