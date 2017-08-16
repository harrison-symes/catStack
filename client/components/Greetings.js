import React from 'react'
import {connect} from 'react-redux'

import {getCats} from '../actions/catActions'

class CatList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getCats())
  }
  render() {
    return (
      <div className="catList">
        {cats.map((cat, i) => <CatPreview catProp={cat} key={i}/>)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {cats: state.cats}

}

export default connect(mapStateToProps)(CatList)
