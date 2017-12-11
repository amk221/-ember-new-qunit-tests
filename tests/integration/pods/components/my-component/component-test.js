/* eslint-disable */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { Promise } from 'rsvp';

module('Integration | Component | my component', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (name, ...args) => this.actions[name].apply(this, args);
  });

  test('simple if statement', async function(assert) {
    assert.expect(2);

    await render(hbs`{{my-component}}`);

    assert.ok(!this.$().text().match('Showing'),
      'not showing');

    this.$('button:contains("Show")').trigger('click');

    assert.ok(this.$().text().match('Showing'),
      'showing');
  });
});
