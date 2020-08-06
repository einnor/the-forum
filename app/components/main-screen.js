import Component from '@ember/component';
import { A } from '@ember/array';

let mapper = (model) => {
  let { attributes, type } = model;
  return { type, ...attributes };
},

export default Component.extend({
  orderBy: A([
    { icon: 'expand_less' },
    { icon: 'expand_more' }
  ]),

  actions: {
    orderByAsc() {
      let sortAsc = (prev, next) => prev.id < next.id ? 1 :-1;
      const posts = this.modelFor('posts');
      posts.sort(sortAsc).map(mapper);
    }
  }
});
