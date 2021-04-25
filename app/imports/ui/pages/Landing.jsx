import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Grid, Image, Header, Icon, Button, Container, Statistic, Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Clubs } from '../../api/club/Clubs';
import Club from '../components/Club';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  render() {
    const totalSize = Clubs.collection.find().count();
    const totalAccount = Meteor.users.find().count();
    const gridStyle = { height: '500px' };
    const gridStyle2 = { margin: '120px 0px 100px 0px' };
    const gridStyle3 = {
      margin: '150px 0px 0px 0px',
      padding: '50px 0px 0px 0px',
    };
    return (
      <div>
        <div className="gitclub-landing-background">
          <Grid container verticalAlign="middle" stackable columns={1} style={gridStyle}>
            <Grid.Column textAlign='center'>
              <Header as='h1' inverted>Are you a UHM student?</Header>
              <Header as='h4' inverted>Find your club and get into it!</Header>
              <Link to="/browse">
                <Button animated color='black'>
                  <Button.Content visible> Browse Clubs</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right"/>
                  </Button.Content>
                </Button>
              </Link>
            </Grid.Column>
          </Grid>
        </div>
        <div className="landing-body">
          <Grid container verticalAlign="middle" stackable columns={1} style={gridStyle2}>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Header as='h1' color='green'>
                Club Services
                  <Header.Subheader> for all UHM students</Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Header as='h3'>
                  Browse for a club that interests you<br/>
                  All information about UHM clubs <br/>
                  Join a club and communicate with students in UHM!
                </Header>

              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Container>
            <Statistic.Group widths='four'>
              <Statistic>
                <Statistic.Value>
                  <Icon name='user' />{totalAccount}
                </Statistic.Value>
                <Statistic.Label>Users</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>{totalSize}</Statistic.Value>
                <Statistic.Label>Clubs</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  <Icon name='sticky note outline' />
                  51,362
                </Statistic.Value>
                <Statistic.Label>Notes</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>
                  <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' className='circular inline' />
                256
                </Statistic.Value>
                <Statistic.Label>Online Users</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </Container>
        </div>
        <div className="landing-body-2">
          <Grid container verticalAlign="middle" stackable columns={1} style={gridStyle3}>
            <Grid.Column textAlign='center'>
              <Header as='h2' icon>
                <Icon name='star outline' size='large'/>
                Popular Clubs
              </Header>
            </Grid.Column>
          </Grid>
          <Grid container columns='equal'>
            <Grid.Row>
              <Card.Group centered>
                {this.props.clubs.map((club, index) => <Club key={index} club={club}/>)}
              </Card.Group>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe(Clubs.nonuserPublicationName);
  const ready = subscription.ready();
  const clubs = Clubs.collection.find({}).fetch();
  return {
    clubs,
    ready,
  };
})(Landing);
