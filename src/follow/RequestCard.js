import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import moment from 'moment';

const RequestCard = props => (
  <Card>
    <Card.Content>
      <Image name='user' src='https://img.icons8.com/windows/32/000000/user-male-circle.png' floated='right' />
      <Card.Header>{props.user.username}</Card.Header>
      <Card.Meta>Active since: {moment(props.user.created_at).format('MMM Do')}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          Approve
        </Button>
        <Button basic color='red'>
          Decline
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default RequestCard;
