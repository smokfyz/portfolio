import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { init as firebaseInit } from './assets/js/firebase'
import Nav from './components/Nav'
import Work from './components/Work'
import Contact from './components/Contact'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App