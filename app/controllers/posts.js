import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  queryParams: ['categoryId', 'order'],
  categoryId: null,
  order: null,
});
