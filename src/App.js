import React, { Component } from 'react';
import { Tabs, Tab } from "@material-ui/core"
import ContactInfo from "./components/contactInfo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Tabs>
          <Link to="/"><Tab label="Contact Info"></Tab></Link>
          <Link to="/education"><Tab label="Education"></Tab></Link>
          <Link to="/experience"><Tab label="Experience"></Tab></Link>
        </Tabs>
        <div style={{ padding: 24 }}>
          <Switch>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/">
              <ContactInfo />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

function Education() {
  return <h2>Education</h2>;
}

function Experience() {
  return <h2>Experience</h2>;
}

export default App;
