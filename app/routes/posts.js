import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

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
  },

  setupController(controller, model) {
    controller.set('posts', model.toArray());
  }
});
