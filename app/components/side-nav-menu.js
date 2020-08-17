import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  categories: service(),
  menuItems: reads('categories.list'),

  async init() {
    this._super(...arguments);
    await this.categories.fetch();
  },
})
