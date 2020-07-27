import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-details-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the header, the title of the post', async function(assert) {
    assert.expect(2);
    await render(hbs`<PostDetailsHeader />`);
    
    assert.dom('.header').exists();
    assert.dom('.title').exists();
  });
});
