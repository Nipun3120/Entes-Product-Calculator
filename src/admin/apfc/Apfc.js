import { useEffect, useState } from 'react';
import axios from 'axios';
import { 
    Container, 
    Typography, 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@mui/material';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { apfcDataActions } from "../store/apfcDataSlice";

export const Apfc = ()=> {
    const [data, setDate] = useState([]);
    const getData = async()=> {
        const apfcdata = await axios({
            method: 'GET',
            url: 'http://localhost:3120/products/apfc'
        })
        const data = await apfcdata.data;
        setDate(data);
    }
    useEffect(()=> {
        getData();
    }, [])

    console.log(data)
    return (
        <Container>  
            <Typography variant="h3" align="center">APFC Relay</Typography>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>No of Steps</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((item, index)=> (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                       <TableCell component="th" scope="row">{item.type}</TableCell>
                       <TableCell>{item.noOfSteps}</TableCell>
                       <TableCell>{item.model}</TableCell>
                       <TableCell>{item.price}</TableCell>
                       <TableCell>{item.discount}</TableCell>                        
                       <TableCell>Delete</TableCell>                        
                    </TableRow>
                ))}

                </TableBody>
            </Table>
            </TableContainer>

            <Typography marginTop="50px">
                <Link to="/add-apfc-relay"><Button variant='contained'>Add More</Button></Link>
            </Typography>

        </Container>
    )
}

// export default function BasicTable() {
//   return (
    
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
    
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// {data.map((item, index)=> (
//     <>
//         <p>{item.model}</p>
//         <p>{item.type}</p>
//         <p>{item.noOfSteps}</p>
//     </>
//     )
// )}