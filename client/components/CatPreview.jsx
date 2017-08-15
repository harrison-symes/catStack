import React from 'react'
import {connect} from 'react-redux'

const CatPreview = ({catProp, dispatch}) => {
  return (
    <div className="catPreview">
      <h2>{catProp.name}</h2>
      <img style={{height: '30vh'}}src={catProp.image_url} />
    </div>
  )
}

export default connect()(CatPreview)
