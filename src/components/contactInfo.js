import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const ContactInfo = props => {

    const { values, fillContactHandler, clearContactHandler, nextHandler } = props;
    return (
        <Grid container spacing={2} style={{ textAlign: "center" }}>
            <Grid item xs={12}>
                <TextField fullWidth label="Name" variant="outlined" value={values.name} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="City, State, and Zip" variant="outlined" value={values.address} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Telephone" variant="outlined" value={values.tel} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="Email" variant="outlined" value={values.email} />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth label="LinkedIn Profile" variant="outlined" value={values.linkedIn} />
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={fillContactHandler}>Auto Fill</Button>
                {" "}<Button variant="outlined" color="secondary" onClick={clearContactHandler}>Clear</Button>
                {" "}<Button variant="outlined" color="primary" onClick={nextHandler}>Next</Button>
            </Grid>
        </Grid>
    )
}

export default ContactInfo;