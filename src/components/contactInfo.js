import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

class ContactInfo extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            tel: "",
            email: "",
            linkedIn: ""
        };
        this.firstNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn"];
        this.lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson"];
        this.cityNames = ["Little Falls", "Great Falls", "Spring Falls", "Hidden Falls", "High Falls", "Niagra Falls"];
        this.stateNames = ["CA", "NC", "SC", "FL", "MA", "NH", "NB", "WA", "AZ", "IL", "OH"];
        this.zipCodes = ["87654", "44567", "98875", "34534", "34523", "34567", "16534", "23434", "45673", "23456", "23423"];
        this.telNumbers = ["453 345 3453", "564 343 4553", "768 345 4564", "976 645 2334"];
    };

    autoGenerateContact = () => {
        const randomFirstName = this.firstNames[this.getRandomIndex(this.firstNames.length)];
        const randomLastName = this.lastNames[this.getRandomIndex(this.lastNames.length)];
        const randomCityName = this.cityNames[this.getRandomIndex(this.cityNames.length)];
        const randomStateName = this.stateNames[this.getRandomIndex(this.stateNames.length)];
        const randomZipCode = this.zipCodes[this.getRandomIndex(this.zipCodes.length)];
        const randomTelNumber = this.telNumbers[this.getRandomIndex(this.telNumbers.length)];
        this.setState({
            name: `${randomFirstName} ${randomLastName}`,
            address: `${randomCityName}, ${randomStateName} ${randomZipCode}`,
            tel: `${randomTelNumber}`,
            email: `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@gmail.com`,
            linkedIn: `https://www.linkedin.com/in/${randomFirstName.toLowerCase()}${randomLastName.toLowerCase()}`
        });
    };

    getRandomIndex = max => {
        const randomIndex = Math.floor(Math.random() * max);
        if (randomIndex < 0 || randomIndex > max)
            console.error("Error: invalid index");
        return randomIndex;
    };

    render() {
        return (
            <Grid container spacing={3} style={{ textAlign: "center" }}>
                <Grid item xs={12}>
                    <TextField fullWidth label="Name" variant="outlined" value={this.state.name} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="City, State, and Zip" variant="outlined" value={this.state.address} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Telephone" variant="outlined" value={this.state.tel} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Email" variant="outlined" value={this.state.email} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="LinkedIn Profile" variant="outlined" value={this.state.linkedIn} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" onClick={this.autoGenerateContact}>Auto Generate</Button> <Button variant="outlined" color="primary">Save</Button>
                </Grid>
            </Grid>
        )
    }
}

export default ContactInfo;