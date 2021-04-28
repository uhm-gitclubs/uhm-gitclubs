import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Label, Icon, Button, Popup} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { _ } from 'meteor/underscore';
import { Clubs } from '../../api/club/Clubs';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {

  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true });

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false });
    }, 500);
  }

  handleClose = () => {
    this.setState({ isOpen: false });
    clearTimeout(this.timeout);
  }

  isJoined() {
    try {
      const user = Meteor.user().username;
      const joined = this.props.club.joined;
      if (joined.includes(user) === true) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  joinClub() {
    const user = Meteor.user().username;
    const joined = this.props.club.joined;
    if (user === undefined) {
      <Link to={/signin/}/>;
    }
    if (joined.includes(user) === false) {
      joined.push(user);
    }
    Clubs.collection.update(this.props.club._id, { $set: { joined: joined } });
  }

  render() {
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
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            { webLink }
            <Popup
              trigger={<Button disabled={this.isJoined()} basic color='green' onClick={ () => this.joinClub() }>
                <Icon color='green' name='add circle'/>
                Join
              </Button>}
              content="welcome!"
              on='click'
              open={this.state.isOpen}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              position='top center'
            />

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
