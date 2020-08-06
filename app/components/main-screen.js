import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
  orderActions: A([
    { icon: 'expand_less' },
    { icon: 'expand_more' }
  ]),
});
