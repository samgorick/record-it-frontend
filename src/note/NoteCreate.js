import React from "react";
import { connect } from "react-redux";
import { addNote } from "./noteActions";
import { Tags } from "../constants/Tags"
import { Grid, Button, Form, Segment, Dropdown } from "semantic-ui-react";

const mapStateToProps = state => ({ id: state.users.id });

const mapDispatchToProps = dispatch => {
  return {
    addNote: (note, history) => dispatch(addNote(note, history))
  };
};

class NoteCreate extends React.Component {
  state = {
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
    this.props.addNote(noteObj, this.props.history);
    this.setState({
      title: "",
      content: "",
      tags: []
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
              <Dropdown
                name='tags'
                className="dropdown-spacing"
                value={this.state.tags}
                onChange={this.handleDropdown}
                placeholder='Tags...'
                fluid
                multiple
                selection
                options={Tags}
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteCreate);
