import React from "react";
import CreateNote from "../components/CreateNote";
import SummaryNote from "../components/SummaryNote";
import { connect } from "react-redux";

class Notes extends React.Component {
  render() {
    return (
      <div>
        Notes
        <CreateNote />
        {this.props.notes.notes.map(note => (
          <SummaryNote key={note.title} note={note} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state };
};

export default connect(mapStateToProps)(Notes);
