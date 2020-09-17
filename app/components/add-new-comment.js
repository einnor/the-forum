import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  store: service(),
  showAddCommentModal: false,
  content: '',
  postId: null,
  actions: {
    closePromptDialog() {
      this.set('showAddCommentModal', false);
    },
    async saveComment() {
      const postId = this.router.currentRoute.parent.params.id;
      const post = await this.store.peekRecord('post', postId)
      const comment = await this.store.createRecord('comment', { content: this.content, post }).save();
      this.set('showAddCommentModal', false)
    },
  },
});
