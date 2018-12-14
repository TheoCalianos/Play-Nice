import React, { Component } from 'react';
import UserGroupTile from '../components/UserGroupTile'
class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }

  }
  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
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
        groups: data
      }
      )})
    }
  render() {

    let Usergroups = this.state.groups.map(group => {
      return(
        <UserGroupTile
          key = {group.id}
          title = {group.title}
        />
      )
    })
    return(
      <div>
        {Usergroups}
      </div>
    )
    }
}
export default UserShowContainer;
