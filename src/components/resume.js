import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";

const Resume = props => {

    const { nextHandler } = props;
    const { contactInfo } = props.values;
    return (
        <Grid container spacing={2} style={{ textAlign: "center" }}>
            <Grid item xs={12}>
                {contactInfo.address} | <a href={`tel:${contactInfo.tel}`}>{contactInfo.tel}</a>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">{contactInfo.name}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={nextHandler}>Next</Button>
            </Grid>
        </Grid>
    )
}

export default Resume;