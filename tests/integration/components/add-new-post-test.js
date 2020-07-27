import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-new-post', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders fab button', async function(assert) {
    assert.expect(1);
    await render(hbs`<AddNewPost />`);

    assert.dom('.fab').exists();
  });

  test('it renders modal when FAB button is clicked', async function(assert) {
    assert.expect(2);
    await render(hbs`<AddNewPost />`);
    assert.dom('.show-add-post-modal').doesNotExist();

    await click('.fab');
    assert.dom('.show-add-post-modal').exists();
  });
});
