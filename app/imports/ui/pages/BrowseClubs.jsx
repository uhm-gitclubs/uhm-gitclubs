import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Icon, Card, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Club from '../components/Club';
import { Clubs } from '../../api/club/Clubs';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class BrowseClubs extends React.Component {
  state = { open: false }

  open = () => this.setState({ open: true })

  handleConfirm = () => this.setState({ result: swal('Done!', '', 'success'), open: false })

  handleCancel = () => this.setState({ open: false })

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center" >
          <Icon color='green' name='search'/>Browse Clubs</Header>
        <hr/>
        <Card.Group centered>
          {this.props.clubs.map((club, index) => <Club key={index} club={club}/>)}
        </Card.Group>
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
