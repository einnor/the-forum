import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
  profileActions: A([
    { icon: 'person' },
    { icon: 'chat' },
    { icon: 'settings' },
  ])
})
