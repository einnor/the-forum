import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post-details', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders the title of the post', async function(assert) {
    assert.expect(2);
    await render(hbs`<PostDetails />`);

    assert.dom('.title').exists();
    const element = this.element.querySelector('.title');
    assert.equal(element.textContent, 'Hammock beard marfa mixtape');
  });

  skip("it renders the image of the author", async function (assert) {
    assert.expect(3);
    await render(hbs`<PostDetails />`);

    assert.dom(".md-avatar").exists();
    const image = this.element.querySelector(".md-avatar");
    assert.equal(
      image.getAttribute("src"),
      "https://place-hold.it/300x500?text=RN&fontsize=128"
    );

  skip("it renders the name of the author and the date of creation", async function (assert) {
    assert.expect(2);
    await render(hbs`<PostDetails />`);

    assert.dom('.author').exists();
    const authorElement = this.element.querySelector('.author');
    assert.equal(authorElement.textContent, 'John Doe');

    assert.dom('.date').exists();
    const dateElement = this.element.querySelector('.date');
    assert.equal(dateElement.textContent, '2020-09-17T08:15:36.637Z');
    });
  });
});
