// react modules
import { useState, forwardRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactorActions } from '../../../store/contactorSlice';

// css imports
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// other imports
import { KVAR_RATING } from '../../../database/staticLists';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>;
  });


export const Contactor = ()=> {
    const dispatch = useDispatch();
    const apfcCount = useSelector(state=> state.apfcState.itemsCount);
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const timeInterval = setTimeout(() => {
        setErrorMessage(false)
        setOpen(false)
        console.log('tick')
        }, 3000)

        return () => {
        clearTimeout(timeInterval)
        }
    }, [open]);

    const handleClick = () => {
      setOpen(true);
    };

    const handleRatingChange = (event)=> {
        console.log(event.target.value)
        setRating(event.target.value);
    }

    const quantityOnchange = (event)=> {
        setQuantity(event.target.value)
        console.log(quantity)
    }

    const submitHandler = ()=> {
        if(apfcCount) {
            if(rating && quantity) {
                // send data
                dispatch(contactorActions.addContactor({
                    rating: rating,
                    quantity: quantity
                }))
                setRating('');
                setQuantity('');
                setOpen(false);
            } else {
                setErrorMessage('Please fill all the details!')
                setOpen(true)
            }
        } else {
            setErrorMessage('Please add APFC RELAY Before adding CONTACTOR!')
            setOpen(true)
        }
    }

    const clearFormHandler = ()=> {
        setRating('')
        setQuantity('');
    }
    return (
    
        <div className="apfcFormWrapper">
        <Box sx={{ minWidth: 50 }}       
        component="form"
        noValidate
        autoComplete="off"
        >
            <FormControl size="medium" fullWidth required="true" style={{marginTop: '30px'}}>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rating}
                    label="Rating"
                    onChange={handleRatingChange}
                    >
                    
                    {KVAR_RATING.map(item=> <MenuItem value={item}>{item}</MenuItem>)}
                        {/* <MenuItem value={'2.5 Kvar'}>2.5 Kvar</MenuItem>
                        <MenuItem value={'2.5 Kvar'}>2.5 Kvar</MenuItem>
                        <MenuItem value={'2.5 Kvar'}>2.5 Kvar</MenuItem> */}

                    </Select>
            </FormControl>
            
            <FormControl size="medium" fullWidth style={{marginTop:'30px'}}>
                <TextField 
                    id="outlined-basic"  
                    label="Enter Quantity" 
                    variant="outlined" 
                    required="true" 
                    onChange={quantityOnchange}
                    value={quantity}
                />
            </FormControl>
            
            <div style={{marginTop: '30px'}}>
                <Button variant="outlined" startIcon={<RefreshIcon />} onClick={clearFormHandler}>
                    Clear
                </Button>
                <Button variant="contained" style={{marginLeft: '20px'}} onClick={submitHandler}>
                    Add
                </Button>
            </div>
        </Box>
        {open &&    
            <Stack spacing={2} sx={{ width: '100%', marginTop: '30px' }}>
                <Alert severity="error">{errorMessage}</Alert>
            </Stack>
        }   

        </div>
    )
}