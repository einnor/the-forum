import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const post = this.modelFor('posts.post');
    return post;
  },
  // async model(query) {
  //   let comments = [];
  //   if (query.to.postId) {
  //     comments = await this.store.query('comment', { postId: query.to.postId });
  //   }
  //   return comments;
  // }
});
