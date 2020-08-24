import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  queryParams: ['categoryId', 'order'],
  categoryId: 'd1fc8d70-a033-4c5c-b8a9-8e2ff8bb3158',
  order: null,
  posts: [],


  // TODO Dirty
  didTransition() {
    this._super(...arguments);
    console.log('transitioned');
  },

  async init() {
    this._super(...arguments);
    console.log(this.router.currentRoute);
    // this.posts.fetch(catgoryId);
    const posts = await this.store.query('post', { categoryId: this.categoryId });
    console.log(posts);
    this.set('posts', posts);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    console.log('received');
  },
});
