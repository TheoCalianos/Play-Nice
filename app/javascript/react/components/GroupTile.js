import React from 'react';
import { Link } from 'react-router'
import GoogleMapReact from 'google-map-react';

const GroupTile = props => {
  // const { startDate, location, description } = props.group
  let center = {
    lat:props.lat,
    lng:props.lng
    }
    debugger;
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
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key:"AIzaSyCxIGVh80hWF3b1CX7lT3o1Bk1OLjv-eAY"}}
              center={center}
              zoom={props.zoom}
              >
              </GoogleMapReact>
          </div>
      </div>
  )
}

export default GroupTile
