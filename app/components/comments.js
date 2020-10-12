import Component from "@ember/component";
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Component.extend({
  store: service(),
  comments: [],
  postId: null,

  @action
  async createComment(content) {
    const post = await this.store.peekRecord('post', this.postId)
    const comment = await this.store.createRecord('comment', { content: content, post }).save();
    this.comments.unshiftObject(comment);
  },
});
