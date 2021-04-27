import React from 'react';
import { Card, Image, Label, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Clubs } from '../../api/club/Clubs';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  state = { open: false, visible: true }

  deleteTag(target) {
    const tags = this.props.club.tags;
    const arr1 = tags.slice(0, target);
    const arr2 = tags.slice(target + 1, tags.length);
    const result = arr1.concat(arr2);
    Clubs.collection.update(this.props.club._id, { $set: { tags: result } });
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
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='blue' target='_blank' href={this.props.club.website}>
              <Icon color='blue' name='world'/>
              Website
            </Button>
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
            <Icon name='delete' onClick={() => this.deleteTag(index)}/>
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
