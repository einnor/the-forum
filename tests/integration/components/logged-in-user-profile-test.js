import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | logged-in-user-profile', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the avatar, the name and the title of the user', async function(assert) {
    assert.expect(4);
    await render(hbs`<LoggedInUserProfile />`);
    assert.dom('.avatar').exists();
    assert.dom('.name').exists();
    assert.dom('.title').exists();
    assert.dom('.socials').exists();
  });
});
