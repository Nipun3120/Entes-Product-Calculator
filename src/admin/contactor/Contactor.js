import { useEffect, useState } from 'react';
import axios from 'axios';
import ContRow from './ContRow';
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
                        <TableCell style={{borderRight: '1px solid #000'}}>Remove</TableCell>
                        <TableCell>Update</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.length > 0 
                ? data.map((item, index)=> (
                    <ContRow 
                        id={item._id}
                        index={index}
                        rating={item.rating}
                        model={item.model}
                        price={item.price}
                        discount={item.discount}
                    />
                ))
                : <Typography variant="h5" align="center" color="red">No Data Available</Typography>
                }
                </TableBody>
            </Table>
            </TableContainer>

            <Typography marginTop="50px">
                <Link to="/add-cap-duty-contactor"><Button variant='contained'>Add More</Button></Link>
            </Typography>

        </Container>
    )
}
