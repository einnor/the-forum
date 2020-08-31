import Devise from 'ember-simple-auth/authenticators/devise';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Devise.extend({
  api: service(),
  serverTokenEndpoint: computed('api.baseApiUrl', function() {
    return `${this.api.baseApiUrl}/users/sign-in`;
  }),
});
