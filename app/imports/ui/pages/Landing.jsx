import React from 'react';
import { Grid, Image, Header, Icon, Button, Container, Statistic, Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
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
              <Grid.Column width={5}>
                <Card>
                  <Image src='https://acmanoa.github.io/assets/img/officers/placehold.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Association for Computing Machinery at UH Manoa (ACManoa/ACM)</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 4/20/2019</span>
                    </Card.Meta>
                    <Card.Meta>
                      <span className='expiration'>Expires on 6/9/2023</span>
                    </Card.Meta>
                    <Card.Description>
                      <p>We, the Association for Computing Machinery at UH Manoa (ACManoa/ACM), are the largest computer science student organization at the University of Hawaii at Manoa.</p>
                      <p>We welcome students of all different backgrounds, interests, and skill levels to join our community and share our passion for computer science.</p>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      202 Members
                    </a>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='grey'>
                        <Icon color='grey' name='info'/>
                        More Info
                      </Button>
                      <Button basic color='red'>
                        <Icon color='red' name='delete'/>
                        Leave
                      </Button>
                    </div>
                  </Card.Content>
                  <Card.Content>
                    <Label >
                      Programming
                      <Icon name='delete' />
                    </Label>
                    <Label >
                      Hacking
                      <Icon name='delete' />
                    </Label>
                    <Label >
                      Computers
                      <Icon name='delete' />
                    </Label>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src='https://pbs.twimg.com/profile_images/1119496798874136576/3ao966FS.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Anime and Manga Society</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 5/23/2019</span>
                    </Card.Meta>
                    <Card.Meta>
                      <span className='expiration'>Expires on 8/5/2023</span>
                    </Card.Meta>
                    <Card.Description>
                      We are an open community of people who love to watch Japanese anime, read manga, have an interest in gaming, cosplay, Japanese culture, western comics/animation, or anything related.
                      <p>We meet at and around the UH Manoa campus for weekly anime showings and gaming meetups.</p>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      67 Members
                    </a>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='grey'>
                        <Icon color='grey' name='info'/>
                        More Info
                      </Button>
                      <Button basic color='red'>
                        <Icon color='red' name='delete'/>
                        Leave
                      </Button>
                    </div>
                  </Card.Content>
                  <Card.Content>
                    <Label >
                      Gaming
                      <Icon name='delete' />
                    </Label>
                    <Label >
                      Anime
                      <Icon name='delete' />
                    </Label>
                    <Label >
                      Manga
                      <Icon name='delete' />
                    </Label>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
