import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommentComponent extends Component {
  @service store;
  @service session;

  @tracked me;

  constructor() {
    super(...arguments);

    this.getMe();
  }

  @action
  async getMe() {
    const me = await this.store.find('user', 'me');
    this.me = me;
  }
}
