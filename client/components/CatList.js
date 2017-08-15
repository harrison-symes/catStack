import React from 'react'
import {connect} from 'react-redux'
import CatPreview from './CatPreview'
import {getCatsRequest} from '../actions/catActions'

class CatList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getCatsRequest())
  }
  render() {
    return (
      <div className="catList">
        <h3>Cats:</h3>
        {this.props.cats.map((cat, i) => <CatPreview catProp={cat} key={i}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {cats: state.cats}

}

export default connect(mapStateToProps)(CatList)
