import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-details-author-date', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the avatar, the post description, the author name and the date', async function(assert) {
    assert.expect(5);
    await render(hbs`<PostDetailsAuthorDate />`);
    
    assert.dom('.details').exists();
    assert.dom('.md-avatar').exists();
    assert.dom('.post-description').exists();
    assert.dom('.author').exists();
    assert.dom('.date').exists();
  });
});
