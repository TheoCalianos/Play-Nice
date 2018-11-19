import React from 'react';
import { Link } from 'react-router'
import GoogleMapReact from 'google-map-react';
const GroupTile = props => {
  // const { startDate, location, description } = props.group
  let center = {
    lat:props.lat,
    lng:props.lng
    }
  return(
      <div className="group-tile medium-6 small-12 column">
      <h3><Link to={`/groups/${props.id}`}>{props.title}</Link></h3>
        <div className="medium-6 small-12 column">
            Location: {props.location}
            <br/>
            Leader: {props.creatorName}
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
          <div style={{ height: '50vh', width: '50%' }} className="medium-6 small-12 column map" >
            <GoogleMapReact
              bootstrapURLKeys={{ key:"AIzaSyCxIGVh80hWF3b1CX7lT3o1Bk1OLjv-eAY"}}
              center={center}
              zoom={18}>
              </GoogleMapReact>
          </div>
      </div>
  )
}

export default GroupTile
