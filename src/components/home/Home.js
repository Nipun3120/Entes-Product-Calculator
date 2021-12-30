// in this page, split into 2 halves, left side there is a choice between 2 type of items
// on the right side there is an invoice containing all the other stored info
import './home.css';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';
import { ProductForm, Bill } from '../index';
import ResponsiveAppBar from '../../ui/Navbar';
import React from 'react';


export const Home = ()=> {
    return(
        <React.Fragment>
            <ResponsiveAppBar />
            <div className="homeWrapper">
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={7} md={6} className="gridProductForm"> 
                        <ProductForm/>
                    </Grid>
                    <Grid item xs={12} lg={5} md={4}>
                        <Bill/>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
