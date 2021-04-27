import { Meteor } from 'meteor/meteor';

const trackUser = 'Track.user';

Meteor.methods({
  'Track.user'() {
    return Meteor.users.find().count();
  },
});

export { trackUser };
