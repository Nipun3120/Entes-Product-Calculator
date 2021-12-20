import {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, FormControl, Typography, InputLabel, Select,MenuItem } from "@mui/material"

export const AddNew = ()=> {
    const [type, setType] = useState('');
    const [steps, setSteps] = useState('');
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

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleStepsChange = (event)=> {
        setSteps(event.target.value);
    }
    // console.log(type);
    // console.log(steps_1);
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
                            ? steps_1.map((item, index)=><MenuItem value={item} key={index}>{item}</MenuItem>)
                            : steps_3.map((item, index)=><MenuItem value={item} key={index}>{item}</MenuItem>)
                        }
                    </Select>
            </FormControl>
        </Container>  
    )
}