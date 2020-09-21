import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  activePostId: reads('router.currentRoute.parent.params.id'),

  @action
  goToPostDetails(postId) {
    this.router.transitionTo('posts.post.details', postId);
  }
})