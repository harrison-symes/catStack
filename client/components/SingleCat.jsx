import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class SingleCat extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      cat: props.cat || null,
      showEdit: false
    }
  }
  componentWillReceiveProps({cat}) {
    this.setState({cat})
  }
  toggleEdit() {
    
  }
  render() {
    let {cat} = this.state
    return (
      <div className="catContainer">
        <Link to='/'>Home</Link>
        {cat
          ? <div className="SingleCat">
            <h1>{cat.name}</h1>
            <img style={{height: '30vh'}} src={cat.image_url} />
            <p>{cat.description}</p>
            <button></button>
          </div>
          : <h1>No Cat!</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(props.match.params.id);
  return {
    cat: state.cats.find(cat => cat.id == props.match.params.id)
  }
}

export default connect(mapStateToProps)(SingleCat)
