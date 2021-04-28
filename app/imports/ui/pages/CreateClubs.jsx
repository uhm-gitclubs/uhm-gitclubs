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
  image: String,
  // moderator: String,
  email: String,
  website: String,
  description: String,
  tags: { type: Array, label: 'Tags', optional: false },
  'tags.$': { type: String, allowedValues: ['computing', 'cultural', 'fitness', 'academic', 'professional', 'sports', 'leisure', 'political', 'sorority', 'fraternity', 'honorary society', 'recreational', 'ethnic', 'service', 'religious',
    'spiritual'] },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class CreateClubs extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { clubName, image, email, website, description, tags } = data;
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
              <TextField id='create-clubs-form-image' name='image' placeholder={'URL to the image'}/>
              <TextField id='create-clubs-form-email' name='email' placeholder={'Primary contact email'}/>
              <TextField id='create-clubs-form-website' name='website' placeholder={'www.example.com'}/>
              <LongTextField id='create-clubs-form-description' name='description' placeholder={'What members can expect from the club'}/>
              <MultiSelectField name='tags' placeholder={'Click to open'}/>
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
