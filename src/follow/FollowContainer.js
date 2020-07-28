import React from 'react';
import { connect } from 'react-redux';
import { getUsers, followRequest, getFollowedUsers } from '../follow/followActions';
import { Card, Header } from 'semantic-ui-react';
import FollowCard from './FollowCard';

class FollowContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    // {() => this.props.getFollowedUsers(this.props.users.id)}
  }

  requestToFollow = followId => {
    // Keys used to match back-end. Current user is requesting to follow another user
    const followObj = {follower_id: this.props.user.id, followed_user_id: followId}
    this.props.followRequest(followObj)
  }

  render() {
    return this.props.allUsers ? (
      <>
      <Header>Follow requests:</Header>
      <Header>All users:</Header>
      <Card.Group>
        {this.props.allUsers.map((user, index) => (
          <FollowCard key={index} user={user} followRequest={this.requestToFollow}/>
        ))}
      </Card.Group>
      </>
    ) : null;
  }
}

export default connect(state => ({ allUsers: state.allUsers, user: state.users }), { getUsers, followRequest, getFollowedUsers })(FollowContainer);
