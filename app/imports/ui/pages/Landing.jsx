import React from 'react';
import { Grid, Image, Header, Icon, Button, Divider, Statistic } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const gridStyle = { height: '500px' };
    const gridStyle2 = { margin: '150px 0px 100px 0px' };
    const dividerStyle = { position: 'relative' };
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
                <Header as='h1'>
                Club Services
                  <Header.Subheader> for all UHM students</Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Header as='h3'>
                  Find for a club you are interested <br/>
                  Information about all clubs in UHM <br/>
                  Communicate with students in UHM
                </Header>

              </Grid.Column>
            </Grid.Row>
          </Grid>

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
        </div>
        <div className="landing-body-2">
          <Grid container verticalAlign="middle" stackable columns={1} style={gridStyle2}>
            <Grid.Column textAlign='center'>
              <Header as='h1'>
                Body2 (Incoming Club Events)
                <Header.Subheader> body2</Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
