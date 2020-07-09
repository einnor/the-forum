import Controller from '@ember/controller';

export default Controller.extend({
  showAddPostModal: false,
  actions: {
    closePromptDialog() {
      this.set('showAddPostModal', false);
    },
    savePost(title) {
      console.log(title);
    },
  },
});
