import React from "react";
import { connect } from "react-redux";
import { editNote } from "./noteActions";
import { Tags } from "../constants/Tags"
import { Grid, Button, Form, Segment, Dropdown } from "semantic-ui-react";

const mapStateToProps = state => ({ id: state.users.id, notes: state.notes });

const mapDispatchToProps = dispatch => {
  return {
    editNote: (note, history) => dispatch(editNote(note, history))
  };
};

class NoteEdit extends React.Component {
  state = {
    id: null,
    title: "",
    content: "",
    tags: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDropdown = (event, data) => {
    this.setState({
      tags: data.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const noteObj = { ...this.state, user_id: this.props.id };
    this.props.editNote(noteObj, this.props.history);
    this.setState({
      title: "",
      content: "",
      tags: []
    });
  };

  componentDidMount() {
    let noteId = this.props.match.params.id;
    let note = this.props.notes.find(note => note.id === parseInt(noteId));
    this.setState({
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags
    });
  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
            <Segment>
              <Form.Field as='h3'>
                <input
                  type='text'
                  name='title'
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder='Enter Note Title...'
                ></input>
              </Form.Field>
              <Form.Field as='p'>
                <textarea
                  type='text'
                  name='content'
                  value={this.state.content}
                  onChange={this.handleChange}
                  placeholder='Enter Note Content...'
                ></textarea>
              </Form.Field>
              <Dropdown
                name='tags'
                className="dropdown-spacing"
                onChange={this.handleDropdown}
                value={this.state.tags}
                placeholder='Tags...'
                fluid
                multiple
                selection
                options={Tags}
              />
              <Button fluid color='blue' type='submit'>
                Update Note
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit);
