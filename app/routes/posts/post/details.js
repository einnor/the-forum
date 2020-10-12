import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import wait from 'the-forum/utils/wait';

export default Route.extend({
  store: service(),

  async model() {
    await wait(5000);
    const post = this.modelFor('posts.post');
    const comments = await this.store.query('comment', { postId: post.id });
    return {
      post,
      comments
    };
  }
});
