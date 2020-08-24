import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';


export default Route.extend({
  session: service(),
  posts: service(),
  postItems: reads('posts.list'),
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

  model(params) {
    return this.postItems;
  }
});
