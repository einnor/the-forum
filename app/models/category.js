import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  numberOfPosts: attr('number'),
  posts: hasMany('post'),
});
