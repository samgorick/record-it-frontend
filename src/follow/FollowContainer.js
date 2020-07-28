import React from 'react';
import { connect } from 'react-redux';
import { getUsers, followRequest, acceptRequest, declineRequest } from '../follow/followActions';
import { Card, Header } from 'semantic-ui-react';
import FollowCard from './FollowCard';
import SentCard from './SentCard';
import ReceivedRequestCard from './ReceivedRequestCard';
import ReceivedInfoCard from './ReceivedInfoCard';

class FollowContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  requestToFollow = followId => {
    // Keys used to match back-end. Current user is requesting to follow another user
    const followObj = { follower_id: this.props.user.id, followed_user_id: followId };
    this.props.followRequest(followObj);
  };

  acceptReceivedRequest = followId => {
    this.props.acceptRequest(followId)
  }

  declineReceivedRequest = followId => {
    this.props.declineRequest(followId)
  }

  render() {
    return this.props.allUsers ? (
      <>
        <Header>Requests to follow you:</Header>
        <Card.Group>
          {this.props.followers
            .filter(follow => !follow.allow)
            .map((follow, index) => (
              <ReceivedRequestCard key={index} follow={follow} accept={this.acceptReceivedRequest} decline={this.declineReceivedRequest}/>
            ))}
        </Card.Group>
        <Header>Your followers:</Header>
        <Card.Group>
          {this.props.followers
            .filter(user => user.allow)
            .map((user, index) => (
              <ReceivedInfoCard key={index} user={user} />
            ))}
        </Card.Group>
        <Header>Follow requests pending:</Header>
        <Card.Group>
          {this.props.followedUsers
            .filter(user => !user.allow)
            .map((user, index) => (
              <SentCard key={index} user={user} />
            ))}
        </Card.Group>
        <Header>You are following:</Header>
        <Card.Group>
          {this.props.followedUsers
            .filter(user => user.allow)
            .map((user, index) => (
              <SentCard key={index} user={user} />
            ))}
        </Card.Group>
        <Header>All users:</Header>
        <Card.Group>
          {this.props.allUsers.map((user, index) => (
            <FollowCard key={index} user={user} followRequest={this.requestToFollow} />
          ))}
        </Card.Group>
      </>
    ) : null;
  }
}

export default connect(
  state => ({
    allUsers: state.allUsers,
    user: state.users,
    followedUsers: state.followedUsers,
    followers: state.followers
  }),
  { getUsers, followRequest, acceptRequest, declineRequest }
)(FollowContainer);
