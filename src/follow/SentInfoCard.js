import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SentInfoCard = props => (
  <Card>
    <Card.Content>
      <Image name='user' src='https://img.icons8.com/windows/32/000000/user-male-circle.png' floated='right' />
      {/* <Card.Header>{props.user.username}</Card.Header>
      <Card.Meta>Active since: {moment(props.user.created_at).format('MMM Do')}</Card.Meta> */}
    </Card.Content>
  </Card>
);

export default SentInfoCard;