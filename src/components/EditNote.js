import React from "react";
import { connect } from 'react-redux'
import { editNote } from '../actions/notes'

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

  handleSubmit = (event) => {
    event.preventDefault()
    const noteObj = {...this.state, user_id: this.props.id}
    this.props.editNote(noteObj, this.props.history)
    this.setState({
      title: "",
      content: ""
    })
  }

  componentDidMount(){
    let noteId = this.props.match.params.id
    let note = this.props.notes.find(note => note.id === parseInt(noteId))
    this.setState({
      id: note.id,
      title: note.title,
      content: note.content
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
                Update Note
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
    editNote: (note, history) => dispatch(editNote(note, history))} 
}

const mapStateToProps = state => {
  return { id: state.users.id, notes: state.notes}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);