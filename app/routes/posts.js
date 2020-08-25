import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
  session: service(),
  store: service(),
  queryParams: {
    categoryId: {
      refreshModel: true,
    }
  },

  async beforeModel(transition) {
    if (!this.session.isAuthenticated) {
      this.transitionTo('/');
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
