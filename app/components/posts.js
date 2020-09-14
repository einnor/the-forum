import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  activePostId: reads('router.currentRoute.parent.params.id'),
})