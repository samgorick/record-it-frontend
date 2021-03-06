import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import moment from 'moment';

const FollowCard = props => (
  <Card>
    <Card.Content>
      <Image name='user' src='https://img.icons8.com/windows/32/000000/user-male-circle.png' floated='right' />
      <Card.Header>{props.user.username}</Card.Header>
      <Card.Meta>Active since: {moment(props.user.created_at).format('MMM Do')}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button fluid primary onClick={() => props.followRequest(props.user.id)}>
        Request to follow
      </Button>
    </Card.Content>
  </Card>
);

export default FollowCard;
