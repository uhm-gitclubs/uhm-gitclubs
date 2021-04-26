import { Meteor } from 'meteor/meteor';

const trackUser = 'Meteor.user';

Meteor.methods({
  'Meteor.user'() {
    return Meteor.users.find().count();
  },
});

export { trackUser };
