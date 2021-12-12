// in this page, split into 2 halves, left side there is a choice between 2 type of items
// on the right side there is an invoice containing all the other stored info
import './home.css';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { ProductForm, Bill } from '../index';


export const Home = ()=> {
    return(
        <div className="homeWrapper">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ProductForm/>
                </Grid>
                <Grid item xs={4}>
                    <Bill/>
                </Grid>
            </Grid>
        </div>
    )
}
