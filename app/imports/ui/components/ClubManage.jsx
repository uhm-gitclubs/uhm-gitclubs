import React from 'react';
import { Card, Image, Label, Icon, Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Clubs } from '../../api/club/Clubs';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  state = { open: false, visible: true }

  deleteClub() {
    Clubs.collection.remove(this.props.club._id);
    this.setState({ result: swal('Done!', '', 'success'), open: false });
  }

  open = () => this.setState({ open: true })

  handleConfirm = () => this.setState({ result: swal('Done!', '', 'success'), open: false })

  handleCancel = () => this.setState({ open: false })

  render() {
    const { visible } = this.state;
    let webLink;
    if (this.props.club.website === 'No website available') {
      webLink = <Button disabled><Icon color='grey' name='world'/>Website</Button>;
    } else {
      webLink = <Button basic color='blue' target='_blank' href={this.props.club.website}><Icon color='blue' name='world'/>Website</Button>;
    }
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
          <Button size='mini' floated='right' color='red' onClick={this.open}>
            Delete
          </Button>
          <Confirm
              open={this.state.open}
              content='Are you sure you want to do this?'
              cancelButton='Never mind'
              confirmButton="Let's do it"
              onCancel={this.handleCancel}
              onConfirm={() => this.deleteClub()}
          />
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            { webLink }
            <Link to={`/edit/${this.props.club._id}`}>
              <Button basic color='red'>
                <Icon color='red' name='pencil'/>
                Edit
              </Button>
            </Link>
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

        <Card.Content extra>
          <Button floated='right' color='red' onClick={this.open}>
            <Icon color='white' name='delete'/>
            Delete
          </Button>
          <Confirm
            open={this.state.open}
            content='Are you sure you want to do this?'
            cancelButton='Never mind'
            confirmButton="Let's do it"
            onCancel={this.handleCancel}
            onConfirm={() => this.deleteClub()}
          />
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(Club);
