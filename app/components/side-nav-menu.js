import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
 menuItems: A([
   { name: 'news', numberOfPosts: 64 },
  //  { name: 'works', numberOfPosts: 100 },
  //  { name: 'culture', numberOfPosts: 23 },
  //  { name: 'general', numberOfPosts: 200 },
  //  { name: 'projects', numberOfPosts: 64 },
  //  { name: 'support', numberOfPosts: 64 },
 ]),
})
