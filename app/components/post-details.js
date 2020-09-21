import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostDetailsComponent extends Component {
  @service router;

  @action
  goBackToPosts () {
    this.router.transitionTo('posts');
  }
}
