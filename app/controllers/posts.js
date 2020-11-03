import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads, sort } from '@ember/object/computed';
import { action } from '@ember/object';

export default Controller.extend({
  router: service(),
  store: service(),
  queryParams: ['categoryId', 'page'],
  categoryId: null,
  // order: 'desc',
  page: 1,
  category: null,
  meta: null,

  @action
  async createPost(title, content) {
    const categoryId = this.router.currentRoute.queryParams.categoryId;
    const category = await this.store.peekRecord('category', categoryId)
    const post = await this.store.createRecord('post', { title, content, category }).save();
    this.posts.unshiftObject(post);
    this.router.transitionTo('posts.post.details', post.id);
  },
});
