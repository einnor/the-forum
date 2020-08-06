import Route from '@ember/routing/route';

export default class PostsPostDetailsRoute extends Route {
  model() {
    const post = this.modelFor('posts.post');
    return post;
  }
}