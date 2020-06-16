import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/notes";
import { Grid, Button, Form, Segment } from "semantic-ui-react";

class CreateNote extends React.Component {
  state = {
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
    this.props.addNote(noteObj, this.props.history);
    this.setState({
      title: "",
      content: ""
    });
  };

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
                Create Note
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
    addNote: (note, history) => dispatch(addNote(note, history))
  };
};

const mapStateToProps = state => {
  return { id: state.users.id };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
