import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Clubs } from '../../api/club/Clubs';
import MultiSelectField from '../forms/controllers/MultiSelectField';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  clubName: String,
  image: { type: String, optional: true },
  // moderator: String,
  email: { type: String, optional: true },
  website: { type: String, optional: true },
  description: String,
  tags: { type: Array, label: 'Tags', optional: true },
  'tags.$': { type: String, allowedValues: ['computing', 'cultural', 'fitness', 'academic', 'professional', 'sports', 'leisure', 'political', 'sorority', 'fraternity', 'honorary society', 'recreational', 'ethnic', 'service', 'religious',
    'spiritual'] },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class CreateClubs extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    let { clubName, image, email, website, description, tags } = data;
    // Non required fields handlers
    // default image
    if (typeof image === 'undefined') {
      image = 'https://pbs.twimg.com/profile_images/1052001602628857856/AGtSZNoO.jpg';
    }
    // the string we use to detect no website
    if (typeof website === 'undefined') {
      website = 'No website available';
    }
    // Assigning the creator as the contact email
    if (typeof email === 'undefined') {
      email = Meteor.user().username;
    }
    // Making the tags an empty array
    if (typeof tags === 'undefined') {
      tags = [];
    }
    // These shouldn't occur, as they are required fields
    if (typeof clubName === 'undefined') {
      clubName = 'Untitled';
    }
    if (typeof description === 'undefined') {
      description = 'No description given';
    }
    const joined = Meteor.user().username;
    const moderator = joined;
    Clubs.collection.insert({ clubName, image, email, website, description, tags, joined, moderator },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid id='createclubs-page' container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Create Club</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField id='create-clubs-form-clubName' name='clubName' placeholder={'Name of the Club'}/>
              <TextField id='create-clubs-form-image' name='image' placeholder={'URL to the image'} required={false}/>
              <TextField id='create-clubs-form-email' name='email' placeholder={'Primary contact email'} required={false}/>
              <TextField id='create-clubs-form-website' name='website' placeholder={'www.example.com'} required={false}/>
              <LongTextField id='create-clubs-form-description' name='description' placeholder={'What members can expect from the club'}/>
              <MultiSelectField name='tags' placeholder={'Click to open'} required={false}/>
              <SubmitField id='create-clubs-form-submit' value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CreateClubs;
