import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Calendar from 'react-calendar';

class NewCharityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      description: "",
      nameTwo: "",
      urlTwo: "",
      descriptionTwo: "",
      nameThree: "",
      urlThree: "",
      descriptionThree: "",
      fieldTwo: "feild-hidden",
      fieldThree: "feild-hidden",
      bottonOne: "botton-show",
      bottonTwo: "botton-hidden",
      bottonThree: "botton-hidden"

    };
    this.postNewCharity = this.postNewCharity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  postNewCharity(payload) {
    fetch(`/api/v1/groups/${this.props.params.id}/charities.json`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
      } else {
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
      let payload = {
        name: this.state.name,
        description: this.state.description,
        url: this.state.url
      };
      this.postNewCharity(payload);
      if(this.state.nameTwo.trim() !== ""){
        let payload = {
          name: this.state.nameTwo,
          description: this.state.descriptionTwo,
          url: this.state.urlTwo
        };
        this.postNewCharity(payload);
      }
      else if (this.state.nameThree.trim() !== ""){
        let payload = {
          name: this.state.nameThree,
          description: this.state.descriptionThree,
          url: this.state.urlThree
        };
        this.postNewCharity(payload);
      }
        browserHistory.push(`/`)
  }
  handleClick(event) {
    event.preventDefault();
    if (this.state.fieldTwo === "feild-hidden"){
      this.setState(
        { fieldTwo: "feild-show ",
          bottonOne: "botton-hidden",
          bottonTwo: "botton-show"}
    )}
    else{
      this.setState(
        { fieldThree: "feild-show",
          bottonTwo: "botton-hidden",
          bottonThree: "botton-show"}
    )}
    }

  render() {
    return(
      <div>
        <h1 className="play-Nice"> Add a Charity! </h1>

        <form className="form row" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={this.state.name}></input>

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={this.state.description}></input>

          <label htmlFor="url">URL:</label>
          <input type="text" name="url" value={this.state.url}></input>
          <input className={`${this.state.bottonOne}`} type="submit" value="Submit" />
          <button type="button" className={`${this.state.bottonOne}`} onClick={this.handleClick}>
          Add A Charity</button>

          <div className={`${this.state.fieldTwo} medium-11 small-11 column`}>
            <h1> Add a Charity! </h1>


            <label htmlFor="nameTwo">Name:</label>
            <input type="text" name="nameTwo" value={this.state.nameTwo}></input>

            <label htmlFor="descriptionTwo">Description:</label>
            <input type="text" name="descriptionTwo" value={this.state.descriptionTwo}></input>

            <label htmlFor="urTwol">URL:</label>
            <input type="text" name="urlTwo" value={this.state.urlTwo}></input>
          </div>

          <input className={`${this.state.bottonTwo} `} type="submit" value="Submit" />

          <button
            type="button"
            className={`${this.state.bottonTwo}`}
            onClick={this.handleClick}>
            Add A Charity
          </button>

          <div className={`${this.state.fieldThree}`}>
            <h1> Add a Charity! </h1>

            <label htmlFor="nameThree">Name:</label>
            <input type="text" name="nameThree" value={this.state.nameThree}></input>

            <label htmlFor="descriptionThree">Description:</label>
            <input type="text" name="descriptionThree" value={this.state.descriptionThree}></input>

            <label htmlFor="urlThree">URL:</label>
            <input type="text" name="urlThree" value={this.state.urlThree}></input>
          </div>

          <input className={`${this.state.bottonThree}`} type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewCharityForm;
