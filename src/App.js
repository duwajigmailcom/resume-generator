import React, { Component, Fragment } from 'react';
import { Tabs, Tab } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ContactInfo from "./components/contactInfo";
import Education from "./components/education";
import Experience from "./components/experience";
import Resume from "./components/resume";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactInfo: {
        name: "",
        address: "",
        tel: "",
        email: "",
        linkedIn: ""
      },
      education: {
        school: "",
        address: "",
        major: "",
        degree: ""
      },
      experience: {
        company: "",
        address: "",
        startDate: "",
        endDate: "",
        desc: ""
      }
    };
    this.firstNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn"];
    this.lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson"];
    this.cityNames = ["Little Falls", "Great Falls", "Spring Falls", "Hidden Falls", "High Falls", "Niagra Falls"];
    this.stateNames = ["CA", "NC", "SC", "FL", "MA", "NH", "NB", "WA", "AZ", "IL", "OH"];
    this.zipCodes = ["87654", "44567", "98875", "34534", "34523", "34567", "16534", "23434", "45673", "23456", "23423"];
    this.telNumbers = ["453 345 3453", "564 343 4553", "768 345 4564", "976 645 2334"];

    this.schoolNames = ["University of Texas", "University of Florida", "University of New York", "University of Virginia", "University of Arizona"];
    this.companyNames = ["Google", "Facebook", "Uber", "Walmart", "IBM", "College Board"];
  };

  fillContact = () => {
    const randomFirstName = this.firstNames[this.getRandomIndex(this.firstNames.length)];
    const randomLastName = this.lastNames[this.getRandomIndex(this.lastNames.length)];
    const randomCityName = this.cityNames[this.getRandomIndex(this.cityNames.length)];
    const randomStateName = this.stateNames[this.getRandomIndex(this.stateNames.length)];
    const randomZipCode = this.zipCodes[this.getRandomIndex(this.zipCodes.length)];
    const randomTelNumber = this.telNumbers[this.getRandomIndex(this.telNumbers.length)];
    this.setState({
      contactInfo: {
        name: `${randomFirstName} ${randomLastName}`,
        address: `${randomCityName}, ${randomStateName} ${randomZipCode}`,
        tel: randomTelNumber,
        email: `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@gmail.com`,
        linkedIn: `https://www.linkedin.com/in/${randomFirstName.toLowerCase()}${randomLastName.toLowerCase()}`
      }
    });
  };

  clearContact = () => {
    this.setState({
      contactInfo: {
        name: "",
        address: "",
        tel: "",
        email: "",
        linkedIn: ""
      }
    });
  };

  fillEducation = () => {
    const randomSchoolName = this.schoolNames[this.getRandomIndex(this.schoolNames.length)];
    const randomCityName = this.cityNames[this.getRandomIndex(this.cityNames.length)];
    const randomStateName = this.stateNames[this.getRandomIndex(this.stateNames.length)];
    this.setState({
      education: {
        school: randomSchoolName,
        address: `${randomCityName}, ${randomStateName}`,
      }
    });
  };

  clearEducation = () => {
    this.setState({
      education: {
        school: "",
        address: ""
      }
    });
  };

  fillExperience = () => {
    const randomCompanyName = this.companyNames[this.getRandomIndex(this.companyNames.length)];
    const randomCityName = this.cityNames[this.getRandomIndex(this.cityNames.length)];
    const randomStateName = this.stateNames[this.getRandomIndex(this.stateNames.length)];
    this.setState({
      experience: {
        company: randomCompanyName,
        address: `${randomCityName}, ${randomStateName}`,
      }
    });
  };

  clearExperience = () => {
    this.setState({
      experience: {
        company: "",
        address: ""
      }
    });
  };
  
  getRandomIndex = max => {
    const randomIndex = Math.floor(Math.random() * max);
    if (randomIndex < 0 || randomIndex > max)
      console.error("Error: invalid index");
    return randomIndex;
  };

  nextStep = () => {
    const { history } = this.props;
    const path = history && history.location && history.location.pathname;
    switch (path) {
      case "/":
        history.push("/education");
        break;
      case "/education":
        history.push("/experience");
        break;
      case "/experience":
        history.push("/resume");
        break;
      default:
        history.push("/");
        break;
    }
  };

  onTabChange = (event, newValue) => {
    this.props.history.push(newValue);
  }

  render() {
    const { history } = this.props;
    const path = history && history.location && history.location.pathname;
    return (
      <Fragment>
        <Tabs value={path} onChange={this.onTabChange}>
          <Tab label="Contact Info" value="/" />
          <Tab label="Education" value="/education" />
          <Tab label="Experience" value="/experience" />
          <Tab label="Resume" value="/resume" />
        </Tabs>
        <div style={{ padding: 24 }}>
          {path === "/" &&
            <ContactInfo
              values={this.state.contactInfo}
              fillHandler={this.fillContact}
              clearHandler={this.clearContact}
              nextHandler={this.nextStep} />
          }
          {path === "/education" &&
            <Education
              values={this.state.education}
              fillHandler={this.fillEducation}
              clearHandler={this.clearEducation}
              nextHandler={this.nextStep} />
          }
          {path === "/experience" &&
            <Experience
              values={this.state.experience}
              fillHandler={this.fillExperience}
              clearHandler={this.clearExperience}
              nextHandler={this.nextStep} />
          }
          {path === "/resume" &&
            <Resume
              values={this.state}
              fillHandler={this.fillContact}
              clearHandler={this.clearContact}
              nextHandler={this.nextStep} />
          }
        </div>
      </Fragment>
    )
  }
}

export default withRouter(App);
