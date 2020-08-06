import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | posts/post/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:posts/post/details');
    assert.ok(route);
  });
});
