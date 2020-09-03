import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Route.extend({
  store: service(),
  queryParams: {
    categoryId: {
      refreshModel: true,
    }
  },
  async model(params, query) {
    let posts = [];
    if (query.to.queryParams.categoryId) {
      posts = await this.store.query('post', { categoryId: query.to.queryParams.categoryId });
    }
    return posts;
  }
});
