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

export const OneCtSteps = ()=> {
    const [steps_1, setSteps_1] = useState([]);
    const [steps_3, setSteps_3] = useState([]);
    const getData_1 = async()=> {
        const stepsData = await axios({
            method: 'GET',
            url: 'http://localhost:3120/choice-fields/category-1ct-steps'
        })
        const data = await stepsData.data;
        setSteps_1(data);
    }
    const getData_3 = async()=> {
        const stepsData = await axios({
            method: 'GET',
            url: 'http://localhost:3120/choice-fields/category-3ct-steps'
        })
        const data = await stepsData.data;
        setSteps_3(data);
    }
    useEffect(()=> {
        getData_1();
        getData_3();
    }, [])
    console.log(steps_3)

    return (
        <Container align="center">
            <Typography variant="h5">Steps</Typography>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>No of Steps</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {steps_1.map((item, index)=> (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                       <TableCell component="th" scope="row">{item.type}</TableCell>
                       <TableCell>{item.category}</TableCell>                        
                       <TableCell>Delete</TableCell>                        
                    </TableRow>
                ))}
                {steps_3.map((item, index)=> (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                       <TableCell component="th" scope="row">{item.type}</TableCell>
                       <TableCell>{item.category}</TableCell>                        
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