import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import CatList from './CatList'
import SingleCat from './SingleCat'
import CreateCat from './CreateCat'
import CreateCharacteristic from './CreateCharacteristic'
import HeroesList from './HeroesList'

import {getCharacteristicsRequest} from '../actions/charactersticActions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCatForm: false,
      showCharacteristicForm: false
    }
  }
  componentDidMount() {
    this.props.dispatch(getCharacteristicsRequest())
  }
  toggleForm(e) {
    this.setState({[e.target.name]: !this.state[e.target.name]})
  }
  render() {
    return (
      <Router>
        <div className='app-container'>
          <h1>Hello Cats</h1>
          <HeroesList />

          <Route exact path='/' component={() => <button name="showCatForm" onClick={this.toggleForm.bind(this)}>{this.state.showCatForm ? 'Cancel' : 'Create Cat'}</button>} />
          {this.state.showCatForm && <Route exact path="/" component={CreateCat} /> }

          <Route exact path='/' component={() => <button name="showCharacteristicForm" onClick={this.toggleForm.bind(this)}>{this.state.showCharacteristicForm ? 'Cancel' : 'Create Characteristic'}</button>} />

          {this.state.showCharacteristicForm && <Route exact path="/" component={CreateCharacteristic} /> }
          <Route exact path="/" component={CatList} />
          <Route exact path='/cats/:id' component={(props) => <SingleCat {...props} />} />
        </div>
      </Router>
    )
  }
}

export default connect()(App)
