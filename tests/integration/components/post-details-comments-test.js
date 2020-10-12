import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-details-comments', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders a list of comments', async function(assert) {
    assert.expect(1);
    await render(hbs`<PostDetailsComments />`);

    assert.dom('.comments').exists();
  });
});
