import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";

const Resume = props => {

    const { nextHandler } = props;
    const { contactInfo, education, experience } = props.values;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                {contactInfo.address}
                {" | "}<a href={`tel:${contactInfo.tel}`}>{contactInfo.tel}</a>
                {" | "}<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                {" | "}<a href={contactInfo.linkedIn}>LinkedIn Profile</a>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography variant="h3">{contactInfo.name}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6"><b>Experience</b></Typography>
            </Grid>
            <Grid item xs={12}>
                <b>{experience.company}</b>, {experience.address} - <i>{experience.title}</i>
            </Grid>
            <Grid item xs={12}>
                {experience.desc}
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6"><b>Education</b></Typography>
            </Grid>
            <Grid item xs={12}>
                <b>{education.school}</b>, {education.address} - <i>{education.degree}, {education.major}</i>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={nextHandler}>Next</Button>
            </Grid>
        </Grid>
    )
}

export default Resume;