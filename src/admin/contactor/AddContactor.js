import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { Container, FormControl, Typography, InputLabel, MenuItem, Select, TextField, Button, Box  } from "@mui/material"
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

export const AddContactor = ()=> {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();

    const [rating, setRating] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDisount] = useState('');

    const buttonSx = {
        ...(success && {
          bgcolor: green[500],
          '&:hover': {
            bgcolor: green[700],
          },
        }),
      };
    useEffect(()=> {
        return () => {
            clearTimeout(timer.current);
          };
    }, [])

    const sendData = async()=> {
        const res = await axios({
            method: 'POST',
            url: "http://localhost:3120/products/contactor",
            headers: {
                "Content-type": "Application/json"
            },
            data: {
                model,
                rating,
                price,
                discount
            }
        });
        console.log(res)
    }

    const handleButtonClick = () => {
        sendData();
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            navigate('/cap-duty-contactor')
            }, 4000);   
        }
    };

    const ratingOnchange = (event)=> {
        setRating(event.target.value)
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
        <>
        <Typography variant="h4" align="center" marginTop="30px">Add a new CAP DUTY CONTACTOR</Typography>
        <Container maxWidth="sm">
            {/* for type, steps, model, price, discount */}
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
                    label="Enter Rating" 
                    variant="outlined" 
                    required="true" 
                    onChange={ratingOnchange}
                    value={rating}
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
        </>
    )
}