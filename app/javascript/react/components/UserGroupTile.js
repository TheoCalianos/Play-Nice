import React from 'react';
import { Link } from 'react-router'

const AttendiesTile = props => {
  return(
    <div>
      <div className= "user-tile medium-12 small-12 column">
          <br></br>
          <h3 className="group-title"><Link to={`/groups/${props.id}`}>{props.title}</Link></h3>

      </div>
    </div>
  )
}

export default AttendiesTile;
