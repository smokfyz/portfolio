import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Work from './components/Work'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </div>
    )
  }
}

export default App