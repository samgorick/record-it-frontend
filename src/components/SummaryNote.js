import React from "react";
import { Link } from "react-router-dom";
import { Item, Button, Label, Icon } from "semantic-ui-react";
import moment from 'moment'

const SummaryNote = props => (
  <Item>
    <Item.Content>
      <Item.Header as='h1'>{props.note.title}</Item.Header>
      <Item.Meta>{moment(props.note.updated_at).fromNow()}</Item.Meta>
      <Item.Description as='p'>
        {props.note.content.slice(0, 100)}
        {props.note.content.length > 100 ? "..." : ""}
      </Item.Description>
      <Item.Extra>
        {props.note.tags.map(tag => (
          <Label>
            <Icon name='tag' />
            {tag}
          </Label>
        ))}
        <Link key={props.note.id} to={`/notes/${props.note.id}`}>
          <Button floated='right'>View</Button>
        </Link>
        <Link key={props.note.id} to={`/notes/edit/${props.note.id}`}>
          <Button floated='right'>Edit</Button>
        </Link>
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default SummaryNote;
