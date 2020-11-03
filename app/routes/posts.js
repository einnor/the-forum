import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  queryParams: {
    categoryId: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
  },

  async model(params, query) {
    let posts = [];
    const queryParams = {
      ...params,
      perPage: 2
    };
    if (query.to.queryParams.categoryId) {
      posts = await this.store.query('post', queryParams);
    }
    return posts;
  },

  setupController(controller, model) {
    controller.set('meta', model.meta);
    controller.set('posts', model.toArray());
  }
});
