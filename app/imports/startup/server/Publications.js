import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '../../api/club/Clubs';
import { Profiles } from '../../api/profile/Profiles';

// Non-User-level publication.
Meteor.publish(Clubs.nonuserPublicationName, function () {
  return Clubs.collection.find();
});

// User-level publication.
// If logged in, then publish documents owned by this user.
Meteor.publish(Clubs.userPublicationName, function () {
  if (this.userId) {
    const joined = Meteor.users.findOne(this.userId).username;
    return Clubs.collection.find({ joined: joined });
  }
  return this.ready();
});

// Moderator-level publication.
// If logged in, then publish documents owned by this user.
Meteor.publish(Clubs.moderatorPublicationName, function () {
  if (this.userId) {
    const moderator = Meteor.users.findOne(this.userId).username;
    return Clubs.collection.find({ moderator: moderator });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Clubs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'siteAdmin')) {
    return Clubs.collection.find();
  }
  return this.ready();
});

// planning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
