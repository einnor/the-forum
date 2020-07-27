import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-screen', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the header', async function(assert) {
    assert.expect(1);
    await render(hbs`<MainScreen />`);

    assert.dom('.header').exists();
  });
});
