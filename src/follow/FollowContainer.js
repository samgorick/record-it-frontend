import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../follow/followActions';
import { Card, Header } from 'semantic-ui-react';
import FollowCard from './FollowCard';

class FollowContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return this.props.users ? (
      <>
      <Header>Follow requests:</Header>
      <Header>All users:</Header>
      <Card.Group>
        {this.props.users.map((user, index) => (
          <FollowCard key={index} user={user} />
        ))}
      </Card.Group>
      </>
    ) : null;
  }
}

export default connect(state => ({ users: state.follow }), { getUsers })(FollowContainer);
