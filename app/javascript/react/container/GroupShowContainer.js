import React, { Component } from 'react';
import CharitiesTile from '../components/CharitiesTile'
import AttendiesTile from '../components/AttendiesTile'
class GroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
        names: "",
        title: "",
        location: "",
        description: "",
        game: "",
        startDate: "",
        endDate: "",
        donatedAmount: "",
        charities: [],
        attendies:[]
      }
    this.Payloadmaker = this.Payloadmaker.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/groups/${this.props.params.id}`)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
        }
      })
    .then((response) => response.json())
    .then((data) => {
      this.setState({

        id: data.id,
        title: data.title,
        location: data.location,
        description: data.description,
        game: data.game,
        startDate: data.start_date,
        endDate: data.start_date,
        donatedAmount: data.donated_amount,
        charities: data.charities,
        attendies: data.attendies
      })
    })
  }
  handleclick(formPayload){
    fetch("/api/v1/memberships",{
       credentials: 'same-origin',
       method: "post",
       body: JSON.stringify(formPayload),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }
     })
     .then(response => {
       if (response.ok) {
         return response;
       } else {
         let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
         throw(error);
       }
     })
     .then(response => response.json())
     .then(body => {
       alert("Now following!")
     })
     .catch(error => console.error('Error:', error));
   }
   Payloadmaker(){
     let payload={
       group_id: this.state.id
     }
     this.handleclick(payload)
   }

  render() {
    let charities = this.state.charities.map(charities => {
      return(
        <CharitiesTile
          key = {charities.id}
          id = {charities.id}
          name = {charities.name}
          description = {charities.description}
          url = {charities.url}
          />
      )
    })
    let attendies = this.state.attendies.map(attendy => {
      return(
        <AttendiesTile
          name = {attendy.user_name}
          />
      )
    })
    return(
      <div>
        <h1>meetup: {this.state.title}</h1>
        <div>
          <p>location: {this.state.location}</p>
          <p>game: {this.state.game}</p>
          <p>description: {this.state.description}</p>
          <p>startDate: {this.state.startDate}</p>
          <p>endDate: {this.state.endDate}</p>
          <p>Minimum Donation Amount: {this.state.donatedAmount}</p>
        </div>
        <button onClick={this.Payloadmaker} >join</button>
        {charities}
        {attendies}
      </div>
    )
  }
}

export default GroupsContainer;
