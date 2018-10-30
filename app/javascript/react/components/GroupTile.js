import React from 'react';
import { Link } from 'react-router'

const BeerTile = props => {
  return(
      <div className="large-3 medium-6 small-12 column beer-tile row">
      <h3><Link to={`/groups/${props.id}`}>{props.title}</Link></h3>
          {props.title}
          {props.location}
          {props.description}
          {props.game}
          {props.startDate}
          {props.endDate}
          {props.donatedAmount}
          {props.names}
        <br/>
      </div>
  )
}

export default BeerTile
