import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  avatar: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  lastLogin: attr('string'),
  createdAt: attr('string'),
  updatedAt: attr('string'),
  posts: hasMany('post'),
});