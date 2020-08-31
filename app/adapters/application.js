import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend({
  session: service(),
  api: service(),
  host: computed('api.baseApiUrl', function() {
    return this.baseApiUrl;
  }),

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