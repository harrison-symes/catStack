import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import CatList from './CatList'
import SingleCat from './SingleCat'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello Cats</h1>
      <Route exact path="/" component={CatList} />
      <Route exact path='/cats/:id' component={(props) => <SingleCat {...props} />} />
    </div>
  </Router>
)

export default App
