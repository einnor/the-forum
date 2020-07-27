import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | side-nav-menu-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the menu item, item name and the number of posts', async function(assert) {
    assert.expect(3);
    await render(hbs`<SideNavMenuItem />`);
    
    assert.dom('.menu-item').exists();
    assert.dom('.item-name').exists();
    assert.dom('.sub').exists();
  });
});
