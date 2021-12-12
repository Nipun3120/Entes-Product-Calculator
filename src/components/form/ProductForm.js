import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Apfc, Contactor } from '../index';
import './formStyles.css';
import { Container } from '@mui/material';

export const ProductForm = ()=> {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        console.log(newValue)
        
        setValue(newValue);
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
            <TabPanel value="1"><Apfc/></TabPanel>
            <TabPanel value="2"><Contactor/></TabPanel>
            </TabContext>
        </Box>
    </Container>
    )
}

