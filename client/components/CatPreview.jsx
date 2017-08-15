import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CatPreview = ({catProp, dispatch}) => {
  return (
    <div className="catPreview">
      <Link to={`/cats/${catProp.id}`}><h2>{catProp.name}</h2></Link>
    </div>
  )
}

export default connect()(CatPreview)
