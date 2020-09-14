import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  content: attr('string'),
  createdAt: attr('string'),
  post: belongsTo('post'),
  user: belongsTo('user', { async: true })
});
