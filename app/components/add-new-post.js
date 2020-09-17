import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  store: service(),
  showAddPostModal: false,
  title: '',
  content: '',
  categoryId: null,
  actions: {
    closePromptDialog() {
      this.set('showAddPostModal', false);
    },
    async savePost() {
      const categoryId = this.router.currentRoute.queryParams.categoryId;
      const category = await this.store.peekRecord('category', categoryId)
      const results = await this.store.createRecord('post', { title: this.title, content: this.content, category }).save();
      this.set('showAddPostModal', false);
    },
  },
});
