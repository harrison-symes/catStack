import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import CatList from './CatList'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello Cats</h1>
      <Route exact path="/" component={CatList} />
    </div>
  </Router>
)

export default App
