import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Label, Icon, Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Clubs } from '../../api/club/Clubs';

/** Renders a My Club card. See pages/MyClubs.jsx. */
class Club extends React.Component {
  state = { open: false }

  leaveClub() {
    const user = Meteor.user().username;
    const joined = this.props.club.joined.filter((key) => key !== user);
    Clubs.collection.update(this.props.club._id, { $set: { joined: joined } });
    this.setState({ result: swal('Done!', '', 'success'), open: false });
  }

  open = () => this.setState({ open: true })

  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <Card>
        <Image src={this.props.club.image}/>
        <Card.Content>
          <Card.Header>{this.props.club.clubName}</Card.Header>
          <Card.Meta>{this.props.club.join}</Card.Meta>
          <Card.Meta>{this.props.club.expire}</Card.Meta>
          <Card.Description>
            {this.props.club.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {this.props.club.joined.length} Members
          </a>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='blue' target='_blank' href={this.props.club.website}>
              <Icon color='blue' name='world'/>
                Website
            </Button>
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
              onConfirm={() => this.leaveClub()}
            />
          </div>
        </Card.Content>
        <Card.Content extra>
          {_.map(this.props.club.tags, (tag, index) => <Label key={index} color='green'>
            {tag}
          </Label>)}
        </Card.Content>
        <Button basic size='small' color='green' href={`mailto: ${this.props.club.email}`}>
          <Icon color='green' name='mail'/>
          Send an Email
        </Button>

      </Card>
    );
  }
}

// Require a document to be passed to this component.
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(Club);
