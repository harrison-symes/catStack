import React from 'react'
import {connect} from 'react-redux'
import {postCharacteristicRequest} from '../actions/charactersticActions'

class CreateCharacteristic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCharacteristic: {}
    }
  }
  submitCharacteristic(e) {
    e.preventDefault()
    e.target.reset()
    this.props.dispatch(postCharacteristicRequest(this.state.newCharacteristic))
  }
  updateCharacterisitcDetails(e) {
    let {newCharacteristic} = this.state
    newCharacteristic[e.target.name] = e.target.value
    this.setState({newCharacteristic})
  }
  render() {
    return (
      <div className="newCharacteristic">
        <form onSubmit={this.submitCharacteristic.bind(this)}>
          <input name="description" placeholder="description" onChange={this.updateCharacterisitcDetails.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(CreateCharacteristic)
