import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Map from './views/map'
import Doctor from './views/doctor'
import DoctorDetails from './views/doctordetails'
import Inperson from './views/inperson'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Map} path="/map" />
        <Route component={Inperson} exact path="/inperson" />
        <Route component={Doctor} path="/login" />
        <Route component={DoctorDetails} path="/doctor" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
