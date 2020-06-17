import React from "react";
import SummaryNote from "../components/SummaryNote";
import { connect } from "react-redux";
import { Grid, Segment, Item } from "semantic-ui-react";
import SearchBar from "../components/SearchBar";

class Notes extends React.Component {
  state = {
    notes: [],
    tag: "",
    search: ""
  };

  componentDidMount() {
    this.setState({
      notes: this.props.notes
    });
  }

  handleReset = () => {
    this.setState({
      notes: this.props.notes,
      tag: "",
      searchText: ""
    });
  };

  tagFilter = (event, data) => {
    const tag = data.value;
    const updatedNotes = this.props.notes.filter(note =>
      note.tags.includes(tag)
    );
    this.setState({
      notes: updatedNotes,
      tag: tag
    });
  };

  search = event => {
    const search = event.target.value;
    const updatedNotes = this.props.notes.filter(
      note =>
        note.content.toLowerCase().includes(search.toLowerCase()) ||
        note.title.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({
      notes: updatedNotes,
      searchText: search
    });
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <SearchBar
            reset={this.handleReset}
            tagFilter={this.tagFilter}
            search={this.search}
            searchText={this.state.searchText}
            tag={this.state.tag}
          />
          <Segment>
            <Item.Group divided>
              {this.state.notes.map(note => (
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
