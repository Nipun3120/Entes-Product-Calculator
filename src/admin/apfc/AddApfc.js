import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Container, FormControl, Typography, InputLabel, MenuItem, Select, TextField, Button, Box  } from "@mui/material"
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

export const AddApfc = ()=> {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();

    const [type, setType] = useState('');
    const [steps, setSteps] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDisount] = useState('');

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
    const buttonSx = {
        ...(success && {
          bgcolor: green[500],
          '&:hover': {
            bgcolor: green[700],
          },
        }),
      };
    useEffect(()=> {
        getData_1();
        getData_3();
        return () => {
            clearTimeout(timer.current);
          };
    }, [])

    const sendData = async()=> {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3120/products/apfc'
        })
    }

    const handleButtonClick = () => {
    sendData();
    if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        }, 4000);
    }
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const stepsOnchange = (event)=> {
        setSteps(event.target.value)
    }
    const modelOnchange = (event)=> {
        setModel(event.target.value)
    }
    const priceOnchange = (event)=> {
        setPrice(event.target.value)
    }
    const discountOnchange = (event)=> {
        setDisount(event.target.value)
    }

    const submitHandler = ()=> {

    }

    return (
        <Container>
            <Typography variant="h4" align="center">Add a new APFC</Typography>
            {/* for type, steps, model, price, discount */}
            <FormControl size="medium" fullWidth required="true">
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="type"
                    onChange={handleTypeChange}
                    >
                        <MenuItem value={'1 CT'}>1 CT</MenuItem>
                        <MenuItem value={'3 CT'}>3 CT</MenuItem>
                    </Select>
            </FormControl>
            <FormControl size="medium" fullWidth style={{marginTop:'30px'}}>
                <TextField 
                    id="outlined-basic"  
                    label="Enter Steps" 
                    variant="outlined" 
                    required="true" 
                    onChange={stepsOnchange}
                    value={steps}
                />
            </FormControl>
            <FormControl size="medium" fullWidth style={{marginTop:'30px'}}>
                <TextField 
                    id="outlined-basic"  
                    label="Enter Model" 
                    variant="outlined" 
                    required="true" 
                    onChange={modelOnchange}
                    value={model}
                />
            </FormControl>
            <FormControl size="medium" fullWidth style={{marginTop:'30px'}}>
                <TextField 
                    id="outlined-basic"  
                    label="Enter Price" 
                    variant="outlined" 
                    required="true" 
                    onChange={priceOnchange}
                    value={price}
                />
            </FormControl>
            <FormControl size="medium" fullWidth style={{marginTop:'30px'}}>
                <TextField 
                    id="outlined-basic"  
                    label="Enter Discount" 
                    variant="outlined" 
                    required="true" 
                    onChange={discountOnchange}
                    value={discount}
                />
            </FormControl>

            <Box sx={{ m: 1, position: 'relative', marginTop:'30px' }}>
                <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleButtonClick}
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    marginTop: '50px',
                    transform:'translate(-50%)'
                }}
                >
                Submit
                </Button>
                {loading && (
                <CircularProgress
                    size={24}
                    sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                    }}
                />
                )}
            </Box>

        </Container>  
    )
}