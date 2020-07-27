import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | posts', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a list of posts', async function(assert) {
    assert.expect(1);
    await render(hbs`<Posts />`);
    
    assert.dom('.posts').exists();
  });
});
