import React from "react";
import SummaryNote from "../components/SummaryNote";
import { connect } from "react-redux";
import { Grid, Segment, Item } from "semantic-ui-react";

class Notes extends React.Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Item.Group divided>
              {this.props.notes.map(note => (
                <SummaryNote key={note.id} note={note} />
              ))}
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.notes };
};

export default connect(mapStateToProps)(Notes);
