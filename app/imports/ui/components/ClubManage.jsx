import React from 'react';
import { Card, Image, Label, Icon, Button, Modal, Transition, Confirm } from 'semantic-ui-react';
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
            <Modal
              trigger={<Button basic color='grey' >
                <Icon color='grey' name='info'/>
                  More Info
              </Button>}
              header={this.props.club.clubName}
              content='Enter more specific details of club here.'
              actions={[{ key: 'done', content: 'Done', positive: true }]}
            />
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
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

export default withRouter(Club);
