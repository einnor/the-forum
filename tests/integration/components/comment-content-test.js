import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | comment-content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the content of the comment', async function(assert) {
    assert.expect(1);

    await render(hbs`<CommentContent />`);
    assert.dom(".post-content").exists();
  });
});
