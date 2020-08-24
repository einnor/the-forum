import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Route.extend({
  async model(params) {
    const posts = this.modelFor('posts');
    const post = posts.find(post => post.id === params.id);
    return post;
  }
})
