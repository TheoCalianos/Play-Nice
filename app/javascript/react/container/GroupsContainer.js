import React, { Component } from 'react';
import GroupTile from '../components/GroupTile'
import { Link } from 'react-router'
import GoogleMapReact from 'google-map-react';
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
        endDate = {group.end_date}
        donatedAmount = {group.donated_amount}
        zoom =  {this.state.zoom}
        lat = {Number.parseFloat(group.lat)}
        lng = {Number.parseFloat(group.lng)}
      />
    )
  })
    return (
      <div>
        <h1 className="play-Nice">Play Nice</h1>
        <p><Link to='group/new' className="new-group"> New Group</Link></p>
        <div className="row group-tiles">{groupsList}</div>
      </div>
      )
    }
  }
export default GroupsContainer
