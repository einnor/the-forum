import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const post = this.modelFor('posts.post');
    return post;
  }
});
