import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Label, Icon, Button, Popup, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { _ } from 'meteor/underscore';
import { Clubs } from '../../api/club/Clubs';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  joinClub() {
    const user = Meteor.users.findOne(this.userId).username;
    const joined = this.props.club.joined;
    let i = 0;
    let join = false;
    while (i < joined.length) {
      if (joined[i] === user) {
        join = true;
      }
      i++;
    }
    if (join === true) {
      <Popup content='You already joined this club!'/>;
    } else {
      joined.push(user);
    }
    Clubs.collection.update(this.props.club._id, { $set: { 'joined': joined } });
  }

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
            <Modal
              trigger={<Button basic color='grey' >
                <Icon color='grey' name='info'/>
                More Info
              </Button>}
              header='More Info'
              content='Enter more specific details of club here.'
              actions={[{ key: 'done', content: 'Done', positive: true }]}
            />
            <Button basic color='green' onClick={ () => this.joinClub() }>
              <Icon color='green' name='add circle'/>
              Join
            </Button>
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
