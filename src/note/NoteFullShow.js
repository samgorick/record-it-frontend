import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from './noteActions';
import { Grid, Segment, Item, Button, Icon, Label } from 'semantic-ui-react';
import moment from 'moment';

class NoteFullShow extends React.Component {
  state = {
    id: null,
    title: '',
    content: '',
    tags: [],
    updated_at: '',
    username: ''
  };

  componentDidMount() {
    let noteId = this.props.match.params.id;
    let note = this.props.notes.find(note => note.id === parseInt(noteId));
    this.setState({
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags,
      updatedAt: note.updated_at,
      username: note.username
    });
  }

  handleClick = () => {
    this.props.deleteNote(this.state.id, this.props.history);
    this.setState({
      id: null,
      title: '',
      content: '',
      tags: [],
      updatedAt: '',
      username: ''
    });
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Item>
              <Item.Content className='dropdown-spacing'>
                <Item.Header as='h1'>{this.state.title}</Item.Header>
                <Item.Meta>{moment(this.state.updatedAt).fromNow()}</Item.Meta>
                <Item.Description as='p' className='show-item-spacing'>
                  {this.state.content}
                </Item.Description>
                {this.state.tags.map(tag => (
                  <Label>
                    <Icon name='tag' />
                    {tag}
                  </Label>
                ))}
              </Item.Content>
              <Item.Extra>
                <Link to='/notes'>
                  <Button animated='vertical'>
                    <Button.Content visible>Back to all notes</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow left' />
                    </Button.Content>
                  </Button>
                </Link>
                {
                 this.state.username === this.props.user.username ? (
                  <>
                  <Link to={`/notes/edit/${this.state.id}`}>
                  <Button animated='vertical'>
                    <Button.Content visible>Edit</Button.Content>
                    <Button.Content hidden>
                      <Icon name='edit' />
                    </Button.Content>
                  </Button>
                </Link>
                <Link to='/notes' onClick={this.handleClick}>
                  <Button color='red' floated='right' animated='vertical'>
                    <Button.Content visible>Delete</Button.Content>
                    <Button.Content hidden>
                      <Icon name='trash alternate' />
                    </Button.Content>
                  </Button>
                </Link>
                </>
                 ) : (
                   null
                 )
                }
              </Item.Extra>
            </Item>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(state => ({ notes: state.notes, user: state.users }), { deleteNote })(NoteFullShow);
