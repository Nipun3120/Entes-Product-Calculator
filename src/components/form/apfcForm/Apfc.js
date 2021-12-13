// react components
import { useState, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apfcActions } from '../../../store/apfcSlice';

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
import { CATEGORY_1CT, CATEGORY_3CT } from '../../../database/staticLists';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>;
  });


export const Apfc = ()=> {
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [steps, setSteps] = useState('');
    const [quantity, setQuantity] = useState('');
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleStepsChange = (event)=> {
        console.log(event.target.value)
        setSteps(event.target.value);
    }

    const quantityOnchange = (event)=> {
        setQuantity(event.target.value)
        console.log(quantity)
    }

    const submitHandler = ()=> {
        if(type && steps && quantity) {
            dispatch(apfcActions.addApfc({
                type,
                noOfSteps: steps,
                quantity,               
            }))
        
            setType('');
            setSteps('');
            setQuantity('');
            setOpen(false);
        } else {
            setOpen(true)
        }
    }

    const clearFormHandler = ()=> {
        setType('');
        setSteps('');
        setQuantity('');
    }
    // const getStepsDropdown = ()=> {
    //     if (!type) {
    //         return (
    //             <MenuItem>Please select type of APFC Relay First</MenuItem>
    //         )
    //     } else {
    //         if(type === '1 CT') {
    //             return (
    //                 <>
    //                     <MenuItem value={4}>4</MenuItem>
    //                     <MenuItem value={6}>6</MenuItem>
    //                     <MenuItem value={9}>9</MenuItem>
    //                     <MenuItem value={12}>12</MenuItem>
    //                 </>
    //             )
    //         } else {
    //             return (
    //                 <>
    //                     <MenuItem value={9}>9</MenuItem>
    //                     <MenuItem value={12}>12</MenuItem>
    //                     <MenuItem value={15}>15</MenuItem>                        
    //                 </>
    //             )
    //         }
    //     }
    // }
    return(
        <div className="apfcFormWrapper">
        <Box sx={{ minWidth: 50 }}       
        component="form"
        noValidate
        autoComplete="off"
        >
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

            <FormControl size="medium" fullWidth required="true" style={{marginTop: '30px'}}>
                <InputLabel id="demo-simple-select-label">Number of Steps</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={steps}
                    label="Number Of Steps"
                    onChange={handleStepsChange}
                    >
                    
                        {type === '1 CT' 
                            ? CATEGORY_1CT.map(item=><MenuItem value={item}>{item}</MenuItem>)
                            : CATEGORY_3CT.map(item=><MenuItem value={item}>{item}</MenuItem>)
                        }
                        {/* <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={12}>12</MenuItem> */}

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
                    <Alert severity="error">Please fill all the details!</Alert>
                </Stack>
            }   

        </div>
    )
}



// type, no of steps, model, quantity