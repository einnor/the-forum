import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    const posts = this.modelFor('posts');
    const post = posts.find(post => post.id === params.id);
  }
})
