import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | comment-author-date', function(hooks) {
  setupRenderingTest(hooks);

  test("it renders the name of the author", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.expect(1);
    await render(hbs`<CommentAuthorDate />`);

    assert.dom('.author').exists();
  });

  test("it renders the image of the author", async function (assert) {
    assert.expect(2);
    await render(hbs`<CommentAuthorDate />`);

    assert.dom(".md-avatar").exists();
    const image = this.element.querySelector(".md-avatar");
    assert.equal(
      image.getAttribute("src"),
      "https://place-hold.it/100x100/666/fff"
    );
  });
});
