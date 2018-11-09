import React from 'react';
import { Link } from 'react-router'
const CharitiesTile = props => {
  return(
    <div>
      <div className="charities-tile">
          <br></br>
          {props.name}
          <br></br>
          {props.description}
          <br></br>
          <a target="blank" href={props.url}>
            <button className="join-button">
            More Info
            </button>
          </a>
      </div>
    </div>
  )
}

export default CharitiesTile;
