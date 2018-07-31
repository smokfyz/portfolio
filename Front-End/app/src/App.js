import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import apiInit from './assets/js/api/init'
import Nav from './components/nav/Nav'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    let api = apiInit()
    console.table(api);
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