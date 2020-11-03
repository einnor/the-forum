import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action, computed } from '@ember/object';

export default Component.extend({
  router: service(),

  pages: computed('meta', function () {
    // If we have a total of 8, this will create an array of integers from 1..8
    // [1, 2, 3, 4, 5, 6, 7, 8]
    const total = this.meta.total;
    return Array.from({length: total}, (_, i) => i + 1);
  }),

  @action
  onClick (page) {
    const categoryId = this.router.currentRoute.attributes.query.categoryId;
    this.router.transitionTo('posts', { queryParams: { categoryId, page } });
  }
});
