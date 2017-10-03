import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      {/*}<Route path='/flock' component={Flock}/>
      <Route path='/team' component={Team}/>
      <Route path='/sponsors' component={Sponsors}/>
      <Route path='/media' component={Media}/>*/}
    </Switch>
  </main>
)

export default Main
