import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  store: service(),
  showAddCommentModal: false,
  content: '',
  actions: {
    closePromptDialog() {
      this.set('showAddCommentModal', false);
    },
    async saveComment() {
      this.createComment(this.content);
      this.setProperties({
        showAddCommentModal: false,
        content: '',
      });
    },
  },
});
