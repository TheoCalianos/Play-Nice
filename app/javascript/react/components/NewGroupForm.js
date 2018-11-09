import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Calendar from 'react-calendar';
import LocationSearchInput from './LocationSearchInput'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
class NewGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      location: "",
      geo_location: {},
      description: "",
      game: "",
      start_date: "",
      end_date: "",
      donated_amount: "",
      charities: []
    };
    this.postNewGroup = this.postNewGroup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleGeoLocation = this.handleGeoLocation.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
  }
  handleAddress(address){
    this.setState({ location:address});
  };

  handleGeoLocation(londlad){
    this.setState({ geo_location:londlad })
  }

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  postNewGroup(payload) {
    fetch(`/api/v1/groups.json`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response.json()

        .then(group => {
          browserHistory.push(`/groups/${group.id}/charities/new`)
        })
      }
       else {
        return response.json()
        .then(response => {
          return response.errors
        })
        .then(errors => {
          this.setState({ errors: errors })
          console.log(this.state.errors);
        })
        .catch(console.log("ERROR in FETCH"));
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
      let payload = {
        title: this.state.title,
        location: this.state.location,
        description: this.state.description,
        game: this.state.game,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        donated_amount: this.state.donated_amount,
        lat: this.state.geo_location.lat,
        lng: this.state.geo_location.lng
      };
      this.postNewGroup(payload);
  }

  render() {
    return(
      <div>
        <h1 className="play-Nice"> Post A MEETUP GROUP! </h1>

        <form className="form row" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
          <div className = "medium-11 small 11">
            <label>Name:</label>
            <input type="text" name="title" value={this.state.title}></input>
          </div>

          <div className = "medium-11 small 11">
            <label>Location:</label>
            <LocationSearchInput
            type="text"
            name="location"
            handleGeoLocation={this.handleGeoLocation}
            handleAddress={this.handleAddress}
            location = {this.state.location}
            />
          </div>

          <div className = "medium-11 small-11">
            <label>Game:</label>
            <input type="text" name="game" value={this.state.game}></input>
          </div>

          <div className = "medium-11 small-11">
            <label>Description:</label>
            <textarea className="test-area" type="text" name="description" value={this.state.description}></textarea>
          </div>

          <div className = "medium-11 small-11">
            <label>First Day:</label>
            <input  type="date" name="start_date"  value={this.state.start_date}/>
          </div>

          <div className = "medium-11 small-11">
            <label>Last Day:</label>
            <input type="date" name="end_date" value={this.state.end_date}/>
          </div>

          <div className = "medium-11 small-11">
            <label>Minimumn donation:</label>
            <input type="text" name="donated_amount" value={this.state.donated_amount}></input>
          </div>


          <input className="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewGroupForm;
