import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import apiInit from './assets/js/api'
import Nav from './components/nav/Nav'
import Work from './components/work/Work'
import WorkItemAdd from './components/work/WorkItemAdd'
import Contact from './components/contact/Contact'
import ApiContext from './components/api/ApiContext'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api: apiInit()
    }
  }

  render() {
    return (
      <div className="App">
        <ApiContext.Provider value={this.state.api}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/work/add" component={WorkItemAdd} />
          </Switch>
        </ApiContext.Provider>
      </div>
    )
  }
}

export default App