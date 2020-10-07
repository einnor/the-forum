import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-details-content', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders post content', async function(assert) {
    assert.expect(1);
    await render(hbs`<PostDetailsContent />`);

    assert.dom('.post-content').exists();
  });
});
