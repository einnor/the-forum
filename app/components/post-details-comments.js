import Component from "@ember/component";
import { inject as service } from '@ember/service';

export default Component.extend({
store: service(),
commentList: [],
//this.set using comments with did receive attribute hook
async init() {
  this._super(...arguments);
  const comments = await this.store.query('comment', { postId: query.to.postId });
  this.set('commentList', comments || []);
  }
});
