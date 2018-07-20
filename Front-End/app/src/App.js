import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Work from './components/Work'
import About from './components/About'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/about-me" component={About} />
          {/*<Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
    <Route exact path="/cv" component={CV} />*/}
        </Switch>
      </div>
    )
  }
}

export default App