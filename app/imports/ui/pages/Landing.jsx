import React from 'react';
import { Grid, Image, Header, Icon, Button, Container, Statistic } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    const gridStyle2 = { margin: '150px 0px 100px 0px' };
    return (
      <div>
        <div className="gitclub-landing-background">
          <Grid container verticalAlign="middle" stackable columns={1} style={gridStyle}>
            <Grid.Column textAlign='center'>
              <Header as='h1' inverted>Are you a UHM student?</Header>
              <Header as='h4' inverted>Find your club and get into it!</Header>
              <Button animated color='black'>
                <Button.Content visible> Browse Clubs</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right"/>
                </Button.Content>
              </Button>
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
                  <Icon name='user' />1300
                </Statistic.Value>
                <Statistic.Label>Users</Statistic.Label>
              </Statistic>

              <Statistic>
                <Statistic.Value>250</Statistic.Value>
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
          <Grid container verticalAlign="middle" stackable columns={1} style={gridStyle2}>
            <Grid.Column textAlign='center'>
              <Header as='h1'>
                Popular Clubs
              </Header>
            </Grid.Column>
          </Grid>
          <Grid container verticalAlign="middle" stackable columns={3} style={gridStyle2}>
            <Grid.Column>

            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
