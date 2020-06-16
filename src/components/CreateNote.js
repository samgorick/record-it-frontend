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
    const noteObj = {...this.state, user_id: this.props.id}
    this.props.addNote(noteObj, this.props.history)
    this.setState({
      title: "",
      content: ""
    })
  }

  render() {
    return (
      <div className='ui centered ten wide column grid'>
        <div className='column'>
          <form className='ui large form' onSubmit={this.handleSubmit}>
            <div className='ui stacked segment'>
              <div className='field'>
                <div className='ui input'>
                  <input
                    type='text'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder='Enter Note Title...'
                  ></input>
                </div>
              </div>
              <div className='field'>
                <div className='ui input'>
                  <textarea
                    type='text'
                    name='content'
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder='Enter Note Content...'
                  ></textarea>
                </div>
              </div>
              <button className='ui fluid small primary button' type='submit'>
                Create Note
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note, history) => dispatch(addNote(note, history))} 
}

const mapStateToProps = state => {
  return { id: state.users.id}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
