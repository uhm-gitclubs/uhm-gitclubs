import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Icon, Card, Loader, Input } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Club from '../components/Club';
import { Clubs } from '../../api/club/Clubs';

/** Renders a container of clubs that are searched for. Use <Club> to render each card. */
class BrowseClubs extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
      value: '',
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.props.clubs.sort(function (a, b) {
      const nameA = a.clubName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.clubName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateSearch(event) {
    this.setState({ value: event.target.value });
  }

  // allows enter to be pressed in order to search
  handleKey(e) {
    if (e.key === 'Enter') {
      this.setState({ search: this.state.value });
      console.log('I pressed enter!');
    }
    // this.setState({ search: this.state.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ search: this.state.value });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const searchedClub = this.props.clubs.filter(
      (club) => (club.clubName.toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1 ||
          (club.tags.join('\n').toLowerCase().indexOf(this.state.search.toLowerCase())) !== -1,
    );
    return (
      <Container id='browseclubs-page'>
        <Header as="h2" textAlign="center">
          <Icon color='green' name='search'/>Browse Clubs
        </Header>
        <hr/>
        <Input
          fluid
          placeholder='Search for club'
          type='text'
          action={{
            labelPosition: 'right',
            icon: 'search',
            content: 'Search',
            onClick: this.handleClick,
          }}
          onKeyPress={this.handleKey}
          value={this.state.value}
          onChange={this.updateSearch}
        />
        <br/>
        {searchedClub.length === 0 ? (<p>No clubs found</p>) :
          (<Card.Group centered>
            {searchedClub.sort().map((club) => <Club key={club._id} club={club}/>)}
          </Card.Group>)
        }
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
BrowseClubs.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  const subscription = Meteor.subscribe(Clubs.nonuserPublicationName);
  const ready = subscription.ready();
  const clubs = Clubs.collection.find({}).fetch();
  return {
    clubs,
    ready,
  };
})(BrowseClubs);
