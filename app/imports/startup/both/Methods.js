import { Meteor } from 'meteor/meteor';

const trackUser = 'track.user';

Meteor.methods({
  'track.user'() {
    return Meteor.users.find().count();
  },
});

export { trackUser };
