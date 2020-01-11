import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const Experience = props => {

    const { values, fillHandler, clearHandler, nextHandler } = props;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth label="Company" variant="outlined" value={values.company} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="City, State" variant="outlined" value={values.address} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Title" variant="outlined" value={values.title} />
            </Grid>            
            <Grid item xs={12}>
                <TextField fullWidth label="Desc" multiline rows="4" variant="outlined" value={values.desc} />
            </Grid>            
            <Grid item xs={12}>
                <Button variant="outlined" onClick={fillHandler}>Auto Fill</Button>
                {" "}<Button variant="outlined" color="secondary" onClick={clearHandler}>Clear</Button>
                {" "}<Button variant="outlined" color="primary" onClick={nextHandler}>Next</Button>
            </Grid>
        </Grid>
    )
}

export default Experience;