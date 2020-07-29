import React from 'react';
import NoteSummaryShow from './NoteSummaryShow';
import { connect } from 'react-redux';
import { Grid, Segment, Item } from 'semantic-ui-react';
import NoteSearch from './NoteSearch';
import FollowerNoteSummaryShow from './FollowerNoteSummaryShow';

class NoteContainer extends React.Component {
  state = {
    tag: '',
    search: ''
  };

  handleReset = () => {
    this.setState({
      tag: '',
      search: ''
    });
  };

  tagFilter = (event, data) => {
    const tag = data.value;
    this.setState({
      tag: tag
    });
  };

  search = event => {
    const search = event.target.value;
    this.setState({
      search: search
    });
  };

  handleTag = () => {
    if (this.state.tag) {
      return this.props.notes.filter(note => note.tags.includes(this.state.tag));
    } else {
      return this.props.notes;
    }
  };

  handleSearch = () => {
    const notes = this.handleTag();
    if (this.state.search) {
      return notes.filter(
        note =>
          note.content.toLowerCase().includes(this.state.search.toLowerCase()) ||
          note.title.toLowerCase().includes(this.state.search.toLowerCase())
      );
    } else {
      return notes;
    }
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <NoteSearch
            reset={this.handleReset}
            tagFilter={this.tagFilter}
            search={this.search}
            searchText={this.state.search}
            tag={this.state.tag}
          />
          <Segment>
            <Item.Group divided>
              {this.handleSearch().map((note, index) =>
                note.username === this.props.user.username ? (
                  <NoteSummaryShow key={index} note={note} />
                ) : (
                  <FollowerNoteSummaryShow key={index} note={note} />
                )
              )}
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(state => ({ notes: state.notes, user: state.users }))(NoteContainer);
