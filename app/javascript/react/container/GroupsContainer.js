import React, { Component } from 'react';
import GroupTile from '../components/GroupTile'
class GroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupsList: [],
      charitiesList: []
    }
  }
  componentDidMount() {
    fetch("/api/v1/groups")
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
      this.setState({groupsList: data})
    })
  }
  render() {
    let groupsList = this.state.groupsList.map(group => {
       let names = ""
       group.charities.forEach((charity)=> {
         names = names + `${charity.name} `
       })
    return (
      <GroupTile
        key = {group.id}
        id = {group.id}
        names = {names}
        title = {group.title}
        location = {group.location}
        createdAt = {group.created_at}
        description = {group.description}
        game = {group.game}
        startDate = {group.start_date}
        endDate = {group.start_date}
        donatedAmount = {group.donated_amount}

      />
    )
  })
    return (
      <h1>{groupsList}</h1>
      )
    }
  }
export default GroupsContainer
