import React from "react";
import SummaryNote from "../components/SummaryNote";
import { connect } from "react-redux";

class Notes extends React.Component {
  render() {
    return (
      <div className="ui divided centered items twelve wide column">
        {this.props.notes.map(note => (
          <SummaryNote key={note.id} note={note} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.notes };
};

export default connect(mapStateToProps)(Notes);
