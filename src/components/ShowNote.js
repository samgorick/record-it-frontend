import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'

class ShowNote extends React.Component {

  state = {
    id: null,
    title: "",
    content: ""
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

  handleClick = () => {
    console.log("delete!!!")
    this.props.deleteNote(this.state.id, this.props.history)
    this.setState({
      id: null,
      title: "",
      content: ""
    })
  }

  render(){
    return(
      <div className="ui centered items twelve wide column">
        <div className="item">
          <div className="content">
            <h1 className="header">{this.state.title}</h1>
            <div className="description">
              <p>{this.state.content}</p>
            </div>
            <div className="extra content">
              <Link to="/notes">Back to all notes</Link>
              <Link to={`/notes/edit/${this.state.id}`}>Edit</Link>
              <Link to="/notes" onClick={this.handleClick}>Delete</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { notes: state.notes}
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: (noteId, history) => dispatch(deleteNote(noteId, history))}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote)