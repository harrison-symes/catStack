import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import CatList from './CatList'
import SingleCat from './SingleCat'
import CreateCat from './CreateCat'

import {getCharacteristicsRequest} from '../actions/charactersticActions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }
  componentDidMount() {
    this.props.dispatch(getCharacteristicsRequest())
  }
  toggleForm() {
    this.setState({showForm: !this.state.showForm})
  }
  render() {
    return (
      <Router>
        <div className='app-container'>
          <h1>Hello Cats</h1>

          <Route exact path='/' component={() => <button onClick={this.toggleForm.bind(this)}>{this.state.showForm ? 'Cancel' : 'Create Cat'}</button>} />
          {this.state.showForm && <Route exact path="/" component={CreateCat} /> }
          <Route exact path="/" component={CatList} />
          <Route exact path='/cats/:id' component={(props) => <SingleCat {...props} />} />
        </div>
      </Router>
    )
  }
}

export default connect()(App)
