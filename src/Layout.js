import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './pages/home/Home'
import Header from './components/Header/Header'

function Layout() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/users">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Layout;