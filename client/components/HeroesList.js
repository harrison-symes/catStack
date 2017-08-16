import React from 'react'
import {connect} from 'react-redux'

import {getHeroes} from '../actions/getHeroesRequest'

class HeroesList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getHeroesRequest())
  }
  render() {
    return (

        {this.props.heroes.map((hero, i) => {hero.name}


    )
  }
}


const mapStateToProps = (state) => {
  return {heroes: state.heroes}

}

export default connect(mapStateToProps)(HeroesList)
