import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['category', 'order'],
  category: null,
  order: 'asc',
});
