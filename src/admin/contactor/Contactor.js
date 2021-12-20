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
export const Contactor = ()=> {
    const [data, setDate] = useState([]);
    const getData = async()=> {
        const apfcdata = await axios({
            method: 'GET',
            url: 'http://localhost:3120/products/contactor'
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
            <Typography variant="h3" align="center">CAP DUTY CONTACTOR</Typography>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Model</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((item, index)=> (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                       <TableCell>{item.model}</TableCell>
                       <TableCell>{item.rating}</TableCell>
                       <TableCell>{item.price}</TableCell>
                       <TableCell>{item.discount}</TableCell>                        
                       <TableCell>Delete</TableCell>                        
                    </TableRow>
                ))}

                </TableBody>
            </Table>
            </TableContainer>

            <Typography marginTop="50px">
                <Link to="/add-cap-duty-contactor"><Button variant='contained'>Add More</Button></Link>
            </Typography>

        </Container>
    )
}
