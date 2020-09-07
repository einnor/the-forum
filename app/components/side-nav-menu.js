import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  store: service(),
  menuItems: [],

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
