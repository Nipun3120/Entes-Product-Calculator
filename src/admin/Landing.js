import { Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { Container, Grid, Paper } from "@mui/material";
import './adminStyle.css';


export const Landing = ()=> {
    return(
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={6} md={4} className="admin-grid-container">
                        <Link to="/apfc-relay">
                                <Button variant="contained">APFC Relay</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="admin-grid-container">
                            contactor
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="admin-grid-container">
                        <Link to="/1-ct-steps">
                                <Button variant="contained">APFC Relay</Button>
                        </Link>                            
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="admin-grid-container">
                            3 ct steps
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="admin-grid-container">
                            kvar rating
                    </Grid>
            </Grid>
        </Container>
    )
}
