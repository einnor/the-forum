import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the image of the author', async function(assert) {
    assert.expect(2);
    await render(hbs`<Post />`);

    assert.dom('.md-avatar').exists();
    const image = this.element.querySelector('.md-avatar');
    assert.equal(image.getAttribute('src'), 'https://place-hold.it/100x100/fff/666');
  });

  test('it renders the title of the post', async function(assert) {
    assert.expect(2);
    await render(hbs`<Post />`);

    assert.dom('.post-title').exists();
    const element = this.element.querySelector('.post-title');
    assert.equal(element.textContent, 'Hammock beard marfa mixtape');
  });

  test('it renders the name of the author', async function(assert) {
    assert.expect(2);
    await render(hbs`<Post />`);

    assert.dom('.author').exists();
    const element = this.element.querySelector('.author');
    assert.equal(element.textContent, 'John Doe');
  });
});
