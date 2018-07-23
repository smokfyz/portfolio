import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Cv from './components/Cv'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cv" component={Cv} />
        </Switch>
      </div>
    )
  }
}

export default App