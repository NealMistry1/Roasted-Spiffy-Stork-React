import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ElectricPage from './views/electric-page'
import EnergyPage from './views/energy-page'
import WaterPage from './views/water-page'
import Homepage from './views/homepage'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ElectricPage} exact path="/electric-page" />
        <Route component={EnergyPage} exact path="/energy-page" />
        <Route component={WaterPage} exact path="/water-page" />
        <Route component={Homepage} exact path="/homepage" />
        <Route component={Login} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
