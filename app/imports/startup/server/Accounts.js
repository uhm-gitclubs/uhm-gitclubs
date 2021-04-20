import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

function createUser(email, password, role, clubs, interests) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
    joined: clubs[0],
    moderator: clubs[1],
    interests: interests,
  });
  if (role === 'siteAdmin') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'siteAdmin');
  }
  if (role === 'clubModerator') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'clubModerator');
  }
}

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ email, password, role, clubs, interests }) => createUser(email, password, role, clubs, interests));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
