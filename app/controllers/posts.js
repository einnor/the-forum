import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  queryParams: ['categoryId', 'order'],
  categoryId: null,
  order: null,


  // TODO Dirty
  didTransition() {
    this._super(...arguments);
    console.log('transitioned');
  },

  init() {
    this._super(...arguments);
    console.log(this.router.currentRoute);
    // this.posts.fetch(catgoryId);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    console.log('received');
  },
});
