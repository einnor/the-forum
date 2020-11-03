import Component from "@ember/component";
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Component.extend({
  store: service(),

  comments: [],
  postId: null,
  commentId: null,

  @action
  async createComment(content) {
    const post = await this.store.peekRecord('post', this.postId)
    const comment = await this.store.createRecord('comment', { content: content, post }).save();
    this.comments.unshiftObject(comment);
  },

  @action
  async deleteCommentById(commentId) {
    const comment = await this.store.peekRecord('comment', commentId)
    await comment.destroyRecord();
    const comments = this.comments.filter((item) => {
      return item.id !== comment.id
    });
    this.set('comments', comments);
  }
});
