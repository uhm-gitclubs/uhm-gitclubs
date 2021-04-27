import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class ClubsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ClubsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      clubName: String,
      image: String,
      // moderator: String,
      email: String,
      website: String,
      description: String,
      tags: { type: Array, label: 'Tags', optional: false },
      'tags.$': { type: String, allowedValues: ['computing', 'cultural', 'fitness', 'academic', 'professional', 'sports', 'leisure', 'political', 'sorority', 'fraternity', 'honorary society', 'recreational', 'ethnic', 'service', 'religious',
        'spiritual'] },
      joined: Array,
      'joined.$': { type: String },
      moderator: Array,
      'moderator.$': { type: String },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.nonuserPublicationName = `${this.name}.publication.nonuser`;
    this.userPublicationName = `${this.name}.publication.user`;
    this.moderatorPublicationName = `${this.name}.publication.usermoderator`;
    this.adminPublicationName = `${this.name}.publication.siteAdmin`;
  }
}

/**
 * The singleton instance of the ClubsCollection.
 * @type {ClubsCollection}
 */
export const Clubs = new ClubsCollection();
