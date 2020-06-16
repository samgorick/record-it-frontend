import React from "react";
import { connect } from "react-redux";
import { editNote } from "../actions/notes";
import { Grid, Button, Form, Segment } from "semantic-ui-react";

class EditNote extends React.Component {
  state = {
    id: null,
    title: "",
    content: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const noteObj = { ...this.state, user_id: this.props.id };
    this.props.editNote(noteObj, this.props.history);
    this.setState({
      title: "",
      content: ""
    });
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

const mapDispatchToProps = dispatch => {
  return {
    editNote: (note, history) => dispatch(editNote(note, history))
  };
};

const mapStateToProps = state => {
  return { id: state.users.id, notes: state.notes };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);
