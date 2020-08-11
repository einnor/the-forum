import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Route.extend({
  posts: service(),
  postItems: reads('posts.list'),
  model(params) {
    const post = this.postItems.find(post => post.id === params.id);
    return post;
  }
})
