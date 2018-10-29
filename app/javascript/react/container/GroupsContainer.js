import React, { Component } from 'react';
import GroupTile from '../components/GroupTile'
class GroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupsList: []
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
    return (
      <GroupTile
        key = {group.id}
        id = {group.id}
        title = {group.title}
        location = {group.location}
        createdAt = {group.created_at}
        description = {group.description}
        game = {group.game}
        time = {group.time}
      />
    )
  })
    return (
      <h1>{groupsList}</h1>
      )
    }
  }
export default GroupsContainer
