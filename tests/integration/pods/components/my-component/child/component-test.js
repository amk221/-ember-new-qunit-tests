import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
// import { Promise } from 'rsvp';

module('Integration | Component | my component', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (name, ...args) => this.actions[name].apply(this, args);
  });

  test('scenario 1', async function(assert) {
    assert.expect(2);

    await render(hbs`{{my-component/child}}`);

    assert.equal(this.$('li').length, 0,
      'precondition, no items');

    this.$('button:contains("Add item")').trigger('click');

    assert.equal(this.$('li').length, 1,
      'clicking the button adds an item');
  });

  test('scenario 2', async function(assert) {
    assert.expect(3);

    this.actions.didFoo = () => {
      assert.ok(true,
        'sends action when foo button is clicked');
    }

    await render(hbs`{{my-component/child on-foo=(action 'didFoo')}}`);

    assert.equal(this.$('.is-foo').length, 0,
      'precondition, no is-foo class name');

    this.$('button:contains("Do foo")').trigger('click');

    assert.equal(this.$('.is-foo').length, 1,
      'doing foo adds is-foo class name');
  });

  test('scenario 3', async function(assert) {
    assert.expect(1);

    await render(hbs`{{my-component/child}}`);

    assert.deepEqual(this.$('.focus-me').get(0), document.activeElement,
      'focuses the element');
  });

  test('scenario 4', async function(assert) {
    assert.expect(2);

    await render(hbs`{{my-component/child}}`);

    assert.ok(!this.$().text().match('Showing me'),
      'not showing');

    this.$('button:contains("Show me")').trigger('click');

    assert.ok(this.$().text().match('Showing me'),
      'showing');
  });
});
