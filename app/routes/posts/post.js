import Route from '@ember/routing/route';

export default class PostsPostRoute extends Route {
  model(params) {
    const posts = this.modelFor('posts');
    const post = posts.find(post => post.id === params.id);
    return post;
  }
}
