import React from 'react';
import { Link } from 'react-router'

const GroupTile = props => {
  return(
      <div className="large-12 medium-12 small-12 column row group-tile">
      <h3><Link to={`/groups/${props.id}`}>{props.title}</Link></h3>
          Location: {props.location}
          <br/>
          Description: {props.description}
          <br/>
          Game: {props.game}
          <br/>
          Start Date: {props.startDate}
          <br/>
          Final Date: {props.endDate}
          <br/>
          Minimum Donation: {props.donatedAmount}
          <br/>
          Charities: {props.names}
      </div>
  )
}

export default GroupTile
