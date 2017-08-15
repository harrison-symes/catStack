import React from 'react'
import {connect} from 'react-redux'

import {postCatRequest} from '../actions/catActions'

class CreateCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {}
    }
  }
  submitCat(e) {
    e.preventDefault()
    e.target.reset()
    this.props.dispatch(postCatRequest(this.state.newCat))
  }
  updateCatDetails(e) {
    let newCat = this.state.newCat
    newCat[e.target.name] = e.target.value
    this.setState({newCat})
  }
  render() {
    return (
      <div className="createCat">
        <form onSubmit={this.submitCat.bind(this)}>
          <input name="name" placeholder="cat name" onChange={this.updateCatDetails.bind(this)} />
          <input name="image_url" placeholder="image address" onChange={this.updateCatDetails.bind(this)} />
          <select name="characteristic_id" onChange={this.updateCatDetails.bind(this)}>
            <option>Select a characteristic</option>
            {this.props.characteristics.map((characteristic, i) => {
              return <option value={characteristic.characteristic_id}>{characteristic.description}</option>
            })}
          </select>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({characteristics}) => {
  return {characteristics}
}

export default connect(mapStateToProps)(CreateCat)
