import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Card, Grid, Label, Image, Icon, Loader, Header, Divider, Transition, Container, Modal, Confirm } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Stuffs } from '../../api/stuff/Stuff';
// import StuffItemAdmin from '../components/StuffItemAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ManageClubsAdmin extends React.Component {
  state = { open: false, visible: true }

  toggleVisibility = () => this.setState((prevState) => ({ visible: !prevState.visible }))

  open = () => this.setState({ open: true })

  handleConfirm = () => this.setState({ result: swal('Done!', '', 'success'), open: false })

  handleCancel = () => this.setState({ open: false })

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;

  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const { visible } = this.state;
    return (
      <Grid container columns='equal'>
        <Grid.Row>
          <Container>
            <Header as="h2" textAlign="center" >
              <Icon color='green' name='cogs'/>Manage Clubs</Header>
            <hr/>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
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
                  <Modal
                    trigger={<Button basic color='grey' >
                      <Icon color='grey' name='info'/>
                        More Info
                    </Button>}
                    header='More Info'
                    content='Enter more specific details of club here.'
                    actions={[{ key: 'done', content: 'Done', positive: true }]}
                  />
                  <Button basic color='red' onClick={this.open}>
                    <Icon color='red' name='delete'/>
                    Leave
                  </Button>
                  <Confirm
                    open={this.state.open}
                    content='Are you sure you want to do this?'
                    cancelButton='Never mind'
                    confirmButton="Let's do it"
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                  />
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
                  <Modal
                    trigger={<Button basic color='grey' >
                      <Icon color='grey' name='info'/>
                        More Info
                    </Button>}
                    header='More Info'
                    content='Enter more specific details of club here.'
                    actions={[{ key: 'done', content: 'Done', positive: true }]}
                  />
                  <Button basic color='red' onClick={this.open}>
                    <Icon color='red' name='delete'/>
                    Leave
                  </Button>
                  <Confirm
                    open={this.state.open}
                    content='Are you sure you want to do this?'
                    cancelButton='Never mind'
                    confirmButton="Let's do it"
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                  />
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
          <Grid.Column>
            <Card>
              <Image src='https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>New Club Template</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in mm/dd/yyyy</span>
                </Card.Meta>
                <Card.Meta>
                  <span className='expiration'>Expires on mm/dd/yyyy</span>
                </Card.Meta>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                    X Members
                </a>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Modal
                    trigger={<Button basic color='grey' >
                      <Icon color='grey' name='info'/>
                        More Info
                    </Button>}
                    header='More Info'
                    content='Enter more specific details of club here.'
                    actions={[{ key: 'done', content: 'Done', positive: true }]}
                  />
                  <Button basic color='red' onClick={this.open}>
                    <Icon color='red' name='delete'/>
                    Leave
                  </Button>
                  <Confirm
                    open={this.state.open}
                    content='Are you sure you want to do this?'
                    cancelButton='Never mind'
                    confirmButton="Let's do it"
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                  />
                </div>
              </Card.Content>
              <Card.Content>
                <Divider hidden />
                <Transition visible={visible} animation='scale' duration={500}>
                  <Label >
                    Label 1
                    <Icon name='delete' content={visible ? 'Hide' : 'Show'}
                      onClick={this.toggleVisibility}/>
                  </Label>
                </Transition>
                <Label >
                    Label 2
                  <Icon name='delete' />
                </Label>
                <Label >
                    Label 3
                  <Icon name='delete' />
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

// Require an array of Stuff documents in the props.
ManageClubsAdmin.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const stuffs = Stuffs.collection.find({}).fetch();
  return {
    stuffs,
    ready,
  };
})(ManageClubsAdmin);