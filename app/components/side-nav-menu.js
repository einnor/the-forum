import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  session: service(),
  store: service(),
  menuItems: [],
  activeCategoryId: reads('router.currentRoute.queryParams.categoryId'),

  async init() {
    this._super(...arguments);
    const categories = await this.store.findAll('category');
    this.set('menuItems', categories || []);
  },

  actions: {
    invalidateSession() {
      this.session.invalidate();
    },
  },
})
