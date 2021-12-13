import { useState } from 'react';
import { useSelector } from "react-redux"
import { apfcActions } from '../../store/apfcSlice';
import { Apfc, Contactor } from '../index';


import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/material';

import './formStyles.css';

export const ProductForm = ()=> {
    const apfcCount = useSelector(state=> state.apfcState.itemsCount);
    const [value, setValue] = useState('1');
      
    const handleChange = (event, newValue) => {
        setValue(newValue)
      };

    return (
    <Container maxWidth="md">
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="APFC Relay" value="1" />
                <Tab label="Cap Duty Contactor" value="2" />
                </TabList>
            </Box>
            {/* <Stack sx={{ width: '100%', marginTop: '30px'}} spacing={2}>
                <Alert variant="filled" severity="warning">
                    This is a warning alert — check it out!
                </Alert>
            </Stack> */}
            <TabPanel value="1"><Apfc/></TabPanel>
            <TabPanel value="2"><Contactor/></TabPanel>
            </TabContext>
        </Box>
    </Container>
    )
}

