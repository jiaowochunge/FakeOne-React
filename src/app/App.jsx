import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from 'app/component/Home'
import EssayContent from 'app/component/EssayContent'
import MusicContent from 'app/component/MusicContent'

import 'assets/css/app.css'

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/essay/:id' component={EssayContent}/>
        <Route path='/music/:id' component={MusicContent}/>
      </Switch>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
