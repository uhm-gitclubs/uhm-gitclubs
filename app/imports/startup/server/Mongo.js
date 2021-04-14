import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Clubs';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addClub(data) {
  console.log(`  Adding: ${data.clubName} (${data.moderator})`);
  Clubs.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Clubs.collection.find().count() === 0) {
  if (Meteor.settings.defaultClubs) {
    console.log('Creating default data.');
    Meteor.settings.defaultClubs.map(data => addClub(data));
  }
}
