import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: service(),
  host: 'http://localhost:4000',
  namespace: 'api',

  headers: null,

  init() {
    this._super(...arguments);
    if (this.session.isAuthenticated) {
      const token = this.session.data.authenticated.token;
      let headers = {};
      headers['Authorization'] = `Bearer ${token}`;
      this.set('headers', headers);
    }
  },
});