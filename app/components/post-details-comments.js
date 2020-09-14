import Component from "@ember/component";
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  comments: [],
  postId: null,

  async didReceiveAttrs() {
    this._super(...arguments);
    const comments = await this.store.query('comment', { postId: this.postId });
    this.set('comments', comments || []);
  }
});
