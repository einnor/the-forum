import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
  profileActions: A([
    { icon: 'chat' },
    { icon: 'business' },
    { icon: 'settings' },
    { icon: 'person' },
  ])
})
