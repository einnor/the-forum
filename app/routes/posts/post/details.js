import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model() {
    const post = this.modelFor('posts.post');
    //const comments = this.modelFor('post.id.comment');
    //const comments = post.find(comment => comment.id === params.id)
    return post;
  }
});
console.log(this.post)
