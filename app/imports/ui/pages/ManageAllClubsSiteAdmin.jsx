import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Icon, Loader, Header, Container } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Clubs';
import ClubManage from '../components/ClubManage';
// import StuffItemAdmin from '../components/StuffItemAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ManageAllClubsSiteAdmin extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {

    return (
      <div id='manage-clubs-admin-page'>
        <Container>
          <Header as="h2" textAlign="center" >
            <Icon color='green' name='settings'/>Manage All clubs</Header>
          <hr/>
          <Card.Group centered>
            {this.props.clubs.map((club, index) => <ClubManage key={index} club={club}/>)}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

// Require an array of Stuff documents in the props.
ManageAllClubsSiteAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Clubs.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const clubs = Clubs.collection.find({}).fetch();
  return {
    clubs,
    ready,
  };
})(ManageAllClubsSiteAdmin);
