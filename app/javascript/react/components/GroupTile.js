import React from 'react';
import { Link } from 'react-router'

const BeerTile = props => {
  return(
      <div className="large-3 medium-6 small-12 column beer-tile row">
          {props.title}
          {props.location}
          {props.description}
          {props.game}
          {props.time}
        <br/>
      </div>
  )
}

export default BeerTile
