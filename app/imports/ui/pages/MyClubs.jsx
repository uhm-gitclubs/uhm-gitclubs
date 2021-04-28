import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Icon, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Clubs } from '../../api/club/Clubs';
import MyClub from '../components/MyClub';
// import StuffItem from '../components/StuffItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MyClubs extends React.Component {
  state = { open: false }

  open = () => this.setState({ open: true })

  handleConfirm = () => this.setState({ result: swal('Done!', '', 'success'), open: false })

  handleCancel = () => this.setState({ open: false })

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container id='myclubs-page'>
        <Header as="h2" textAlign="center" >
          <Icon color='green' name='search'/>My Clubs</Header>
        <hr/>
        <Card.Group itemsperrow={3} centered>
          {this.props.clubs.map((club, index) => <MyClub key={index} club={club}/>)}
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
MyClubs.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Clubs.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const clubs = Clubs.collection.find({}).fetch();
  return {
    clubs,
    ready,
  };
})(MyClubs);
