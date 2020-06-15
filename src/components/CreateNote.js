import React from "react";
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

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

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.addNote(this.state)
    this.setState({
      title: "",
      content: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Enter Note Title...'
        ></input>
        <input
          type='text'
          name='content'
          value={this.state.content}
          onChange={this.handleChange}
          placeholder='Enter Note Content...'
        ></input>
        <input type='submit'></input>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note))} 
}

export default connect(null, mapDispatchToProps)(CreateNote);
