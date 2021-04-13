import React from 'react';
import { Image } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
      <footer>
        <div style={divStyle} className="ui center aligned container">
          <hr />
          <Image size='tiny' centered circular src="/images/gitclubs-logo.png" /> <br />
              Department of Information and Computer Sciences <br />
              University of Hawaii<br />
              Honolulu, HI 96822 <br />
          <a href="https://uhm-gitclubs.github.io/">UHM GitClubs Home Page</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
