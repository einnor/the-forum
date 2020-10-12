import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  store: service(),
  showAddPostModal: false,
  title: '',
  content: '',

  actions: {
    closePromptDialog() {
      this.set('showAddPostModal', false);
    },
    async savePost() {
      await this.createPost(this.title, this.content);
      this.setProperties({
        title: '',
        content: '',
        showAddPostModal: false
      });
    },
  },
});
