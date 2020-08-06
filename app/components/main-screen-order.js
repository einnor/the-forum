import Component from '@ember/component';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default Component.extend({
  orderActions: A([
    { icon: 'expand_less' },
    { icon: 'expand_more' }
  ]),

  router: service(),
  actions: {
    orderBy(order) {
      this.router.transitionTo('posts', { queryParams: { order } });
    }
  }
})
