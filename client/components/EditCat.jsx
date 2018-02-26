import React from 'react'
import {connect} from 'react-redux'

import {editCatRequest} from '../actions/catActions'

class EditCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldCat: props.cat,
      newCat: props.cat
    }
  }
  updateCatDetails (e) {
    let {newCat} = this.state
    newCat[e.target.name] = e.target.value
    this.setState({newCat})
  }
  submitEdit(e) {
    e.preventDefault()
    this.props.dispatch(editCatRequest(this.state.oldCat, this.state.newCat))
    this.props.submit()
  }
  render() {
    let {newCat} = this.state
    return (
      <form onSubmit={this.submitEdit.bind(this)}>
        <label>Cat Name:
          <input name="name" value={newCat.name} onChange={this.updateCatDetails.bind(this)}/>
        </label>
        <label>Cat Image:
          <input name="image_url" value={newCat.image_url} onChange={this.updateCatDetails.bind(this)}/>
        </label>
        <label>Characteristic:
          <select name="characteristic_id" onChange={this.updateCatDetails.bind(this)}>
            {this.props.characteristics.map(({characteristic_id, description}, i) => (
              <option value={characteristic_id} selected={characteristic_id == newCat.characteristic_id}>{description}</option>
            ))}
          </select>
        </label>
        <input type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({characteristics}) => {
  return {characteristics}
}

export default connect(mapStateToProps)(EditCat)
