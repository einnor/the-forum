import Route from '@ember/routing/route';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  posts: service(),
  postItems: computed('posts.list', function() {
    console.log(this.posts.list);
    return this.posts.list
  }),
})
