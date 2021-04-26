import { Meteor } from 'meteor/meteor';

const trackUser = 'Accounts.user';

Meteor.methods({
  'Accounts.user'() {
    return Meteor.users.find().count();
  },
});

export { trackUser };
