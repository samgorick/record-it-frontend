import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SentCard = props => (
  <Card>
    <Card.Content>
      <Image name='user' src='https://img.icons8.com/windows/32/000000/user-male-circle.png' floated='right' />
      <Card.Header>{props.user.followed_user.username}</Card.Header>
    </Card.Content>
  </Card>
);

export default SentCard;
