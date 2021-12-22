import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Container, FormControl, Typography, InputLabel, Select,MenuItem, Box , Button, TextField} from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

import { CATEGORY_1CT, CATEGORY_3CT } from '../../database/staticLists';

export const AddNew = ()=> {
    const navigate = useNavigate();
    const [type, setType] = useState('');
    const [steps, setSteps] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();

        
    const buttonSx = {
        ...(success && {
          bgcolor: green[500],
          '&:hover': {
            bgcolor: green[700],
          },
        }),
      };
    useEffect(()=> {
        // getData_1();
        // getData_3();
        return () => {
            clearTimeout(timer.current);
          };
    }, [])

    const sendData = async ()=> {
        if(type === '1 CT') {
            const res = await axios({
                method: "POST",
                url: "http://localhost:3120/choice-fields/category-1ct-steps",
                headers: {
                    "Content-Type": "Application/json"
                },
                data: {
                    category: steps,
                    type
                }
            })
        } else {
            const res = await axios({
                method: "POST",
                url: "http://localhost:3120/choice-fields/category-3ct-steps",
                headers: {
                    "Content-Type": "Application/json"
                },
                data: {
                    category: steps,
                    type
                }
            }) 
        }

        
    }
    const handleButtonClick = () => {
        sendData();
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            navigate('/add-new-steps')
            }, 4000);   
        }
    };


    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleStepsChange = (event)=> {
        setSteps(event.target.value);
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" marginBottom="30px">Add Steps</Typography>
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
                    label="Enter Quantity" 
                    variant="outlined" 
                    required="true" 
                    onChange={handleStepsChange}
                    value={steps}
                />
            </FormControl>
            {/* <FormControl size="medium" fullWidth required="true" style={{marginTop: '30px'}}>
                <InputLabel id="demo-simple-select-label">Number of Steps</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={steps}
                    label="Number Of Steps"
                    onChange={handleStepsChange}
                    >
                        {type === '1 CT' 
                            ? CATEGORY_1CT.map(item=><MenuItem value={item.category}>{item.category}</MenuItem>)
                            : CATEGORY_3CT.map(item=><MenuItem value={item.category}>{item.category}</MenuItem>)
                        }
                    </Select>
            </FormControl> */}

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