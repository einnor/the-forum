import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default JSONAPIAdapter.extend({
  session: service(),
  host: 'http://localhost:4000',
  namespace: 'api',
  headers: null,

  init() {
    this._super(...arguments);
    if (this.session.isAuthenticated) {
      const token = this.get('session.data.authenticated.token');
      let headers = {};
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
      this.set('headers', headers);
    }
  },
});
