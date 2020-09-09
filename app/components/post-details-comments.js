import Component from "@ember/component";
import { inject as service } from '@ember/service';

export default Component.extend({
store: service(),
router: service(),
commentList: [],

async init(query) {
  this._super(...arguments);
  const postId = this.router.currentRoute.params
  const comments = await this.store.query('comment', { postId });
  this.set('commentList', comments || []);
  }
});
