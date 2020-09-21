import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-new-comment', function(hooks) {
  setupRenderingTest(hooks);

    test('it renders fab button', async function (assert) {
      assert.expect(1);
      await render(hbs`<AddNewComment />`);

      assert.dom('.fab').exists();
    });

    test('it renders modal when FAB button is clicked', async function (assert) {
      assert.expect(2);
      await render(hbs`<AddNewComment />`);
      assert.dom('.show-add-comment-modal').doesNotExist();

      await click('.fab');
      assert.dom('.show-add-comment-modal').exists();
  });
});
