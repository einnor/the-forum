 import Service from '@ember/service';
import { inject as service } from '@ember/service';
import axios from 'axios';

export default Service.extend({
  api: service(),
  list: [],

  async fetch() {
    try {
      const response = await axios({
        method: 'get',
        url: `${this.api.baseApiUrl}/categories`,
      });

      if (response.status === 200) {
        const categories = response.data;
        this.set('list', categories);
      }
      return response;
    } catch (exception) {
      // Handle exception
      console.log(exception);
    }
  },
});
