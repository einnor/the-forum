import Route from '@ember/routing/route';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  posts: service(),
  model() {
    return this.posts.list;
  }
})
