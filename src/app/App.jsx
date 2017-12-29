import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './component/Home'
import EssayContent from 'app/component/EssayContent'

import 'assets/css/app.css'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/essay/:id" component={EssayContent}/>
      </Switch>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
