import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Calendar from 'react-calendar';

class NewGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      location: "",
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
        debugger;
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
        donated_amount: this.state.donated_amount
      };
      this.postNewGroup(payload);
  }

  render() {
    return(
      <div>
        <h1> Post A MEETUP GROUP! </h1>

        <form className="form" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>

          <label htmlFor="title">Name:</label>
          <input type="text" name="title" value={this.state.title}></input>

          <label htmlFor="location">Location:</label>
          <input type="text" name="location" value={this.state.location}></input>

          <label htmlFor="game">Game:</label>
          <input type="text" name="game" value={this.state.game}></input>

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={this.state.description}></input>

          <label htmlFor="start_date">First Day:</label>
          <input  type="date" name="start_date"  value={this.state.start_date}/>

          <label htmlFor="end_date">Last Day:</label>
          <input type="date" name="end_date" value={this.state.end_date}/>

          <label htmlFor="donated_amount">Minimumn donation:</label>
          <input type="text" name="donated_amount" value={this.state.donated_amount}></input>

          <input className="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewGroupForm;
