import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteNote } from "../actions/notes";
import { Grid, Segment, Item, Button, Icon } from "semantic-ui-react";

class ShowNote extends React.Component {
  state = {
    id: null,
    title: "",
    content: ""
  };

  componentDidMount() {
    let noteId = this.props.match.params.id;
    let note = this.props.notes.find(note => note.id === parseInt(noteId));
    this.setState({
      id: note.id,
      title: note.title,
      content: note.content
    });
  }

  handleClick = () => {
    this.props.deleteNote(this.state.id, this.props.history);
    this.setState({
      id: null,
      title: "",
      content: ""
    });
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Item>
              <Item.Content>
                <Item.Header as='h1'>{this.state.title}</Item.Header>
                <Item.Description as='p' className='show-item-spacing'>
                  {this.state.content}
                </Item.Description>
              </Item.Content>
              <Item.Extra>
                <Link to='/notes'>
                  <Button>Back to all notes</Button>
                </Link>
                <Link to={`/notes/edit/${this.state.id}`}>
                  <Button>Edit</Button>
                </Link>
                <Link to='/notes' onClick={this.handleClick}>
                  <Button color='red' floated='right' animated='vertical'>
                    <Button.Content visible>Delete</Button.Content>
                    <Button.Content hidden>
                      <Icon name='trash alternate' />
                    </Button.Content>
                  </Button>
                </Link>
              </Item.Extra>
            </Item>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: (noteId, history) => dispatch(deleteNote(noteId, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote);
