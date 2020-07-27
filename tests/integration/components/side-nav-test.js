import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | side-nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the sidenav, the nav profile and the menu list', async function(assert) {
    assert.expect(3);
    await render(hbs`<SideNav />`);
    
    assert.dom('.site-side-nav').exists();
    assert.dom('.site-side-nav-profile').exists();
    assert.dom('.menu-list').exists();
  });
});
