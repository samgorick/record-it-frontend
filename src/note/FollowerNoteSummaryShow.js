import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Button, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';

const FollowerNoteSummaryShow = props => (
  <Item>
    <Item.Content>
      <Item.Header as='h1'>
        {props.note.title} || {props.note.username}
      </Item.Header>
      <Item.Meta>{moment(props.note.updated_at).fromNow()}</Item.Meta>
      <Item.Description as='p'>
        {props.note.content.slice(0, 100)}
        {props.note.content.length > 100 ? '...' : ''}
      </Item.Description>
      <Item.Extra>
        {props.note.tags.map(tag => (
          <Label>
            <Icon name='tag' />
            {tag}
          </Label>
        ))}
        <Link key={props.note.id} to={`/notes/${props.note.id}`}>
          <Button color='blue' floated='right'>
            View
          </Button>
        </Link>
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default FollowerNoteSummaryShow;
