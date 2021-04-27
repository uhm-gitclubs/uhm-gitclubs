import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Clubs';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addClub(data) {
  console.log(`  Adding: ${data.clubName}`);
  Clubs.collection.insert(data);
}

/**
 * If the loadAssestsFile field in settings.development.json is true, then load the data in private/data.json.
 */
if (Meteor.settings.loadAssetsFile) {
  const assetsFileName = 'dataNoMod.json';
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.clubs.map(clubs => addClub(clubs));
}
