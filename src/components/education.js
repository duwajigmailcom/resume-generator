import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const Education = props => {

    const { values, fillHandler, clearHandler, nextHandler } = props;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth label="School" variant="outlined" value={values.school} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="City, State" variant="outlined" value={values.address} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Major" variant="outlined" value={values.major} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Degree" variant="outlined" value={values.degree} />
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={fillHandler}>Auto Fill</Button>
                {" "}<Button variant="outlined" color="secondary" onClick={clearHandler}>Clear</Button>
                {" "}<Button variant="outlined" color="primary" onClick={nextHandler}>Next</Button>
            </Grid>
        </Grid>
    )
}

export default Education;