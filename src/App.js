import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component = {ListEmployeeComponent} />
              <Route path="/employees" component = {ListEmployeeComponent} />
              <Route path="/add-employee/:id" component = {CreateEmployeeComponent} />
              <Route path="/view-employee/:id" component = {ViewEmployeeComponent} />
              {/* <Route path="/update-employee/:id" component = {UpdateEmployeeComponent} /> */}
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
