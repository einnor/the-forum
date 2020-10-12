import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  async model() {
    const post = this.modelFor('posts.post');
    const comments = await this.store.query('comment', { postId: post.id });
    return {
      post,
      comments
    };
  }
});
