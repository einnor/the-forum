import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  posts: service(),
  posts: reads('posts.articles')
})
