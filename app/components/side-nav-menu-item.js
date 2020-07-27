import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend ({
  router: service(),
  actions: {
    redirectTo(route) {
      this.router.transitionTo(route);
    }
  }
})
