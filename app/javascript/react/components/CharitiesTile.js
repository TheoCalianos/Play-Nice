import React from 'react';

const CharitiesTile = props => {
  return(
    <div>
      <div className="charities-tile">
          <br></br>
          {props.name}
          <br></br>
          {props.description}
          <br></br>
          {props.url}
      </div>
    </div>
  )
}

export default CharitiesTile;
