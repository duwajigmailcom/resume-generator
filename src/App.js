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
          <Link to="/"><Tab label="Home"></Tab></Link>
          <Link to="/contactInfo"><Tab label="Contact Info"></Tab></Link>
        </Tabs>
        <div style={{padding: 24}}>
          <Switch>
            <Route path="/contactInfo">
              <ContactInfo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}



export default App;
