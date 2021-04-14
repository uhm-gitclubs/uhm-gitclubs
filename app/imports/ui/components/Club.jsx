import React from 'react';
import { Card, Image, Lable, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
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
        <Card.Content extra>
          <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
        </Card.Content>
        <Card.Content extra>
          <Lable>
            <Icon name='delete' />
          </Lable>
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
