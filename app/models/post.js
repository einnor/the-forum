import Model, { attr } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  createdAt: attr('string'),
  // category: belongsTo('category'),
  // user: belongsTo('user', { async: true }),
});