import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Stuffs } from '../../api/stuff/Stuff';
import MultiSelectField from '../forms/controllers/MultiSelectField';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  clubName: String,
  image: String,
  // moderator: String,
  email: String,
  website: String,
  description: String,
  tags: { // need to use multiselect field for this
    type: String,
    allowedValues: ['Computing', 'Culture', 'Fitness', 'Academic', 'Professional', 'Sports', 'Leisure', 'Political', 'Sorority', 'Fraternity', 'Honorary Society'],
    /*
  'tags.$': { type: String },
  'Club Name': String,
  'Image URL': String,
  'Club Contact Email': String,
  'Club Website URL': String,
  'Club Description': String,
  'Tags (use multiselect field from bowfolios)': String,
  name: String,
  quantity: Number,
  condition: {
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    defaultValue: 'good',
*/
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class CreateClubs extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Stuffs.collection.insert({ name, quantity, condition, owner },
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
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Create Clubs</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='clubName' placeholder={'Name of the Club'}/>
              <TextField name='image' placeholder={'URL to the image'}/>
              <TextField name='email' placeholder={'Primary contact email'}/>
              <TextField name='website' placeholder={'www.example.com'}/>
              <LongTextField name='description' placeholder={'What members can expect from the club'}/>
              <MultiSelectField name='tags' placeholder={'Click to open'}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CreateClubs;
