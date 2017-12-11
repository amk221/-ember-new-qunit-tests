import Component from '@ember/component';
import { A as emberA } from '@ember/array';

export default Component.extend({
  classNameBindings: ['isFoo'],
  isFoo: false,

  init() {
    this._super(...arguments);
    this.set('items', emberA());
  },

  actions: {
    addItem() {
      const i = this.get('items.length');
      this.get('items').addObject(`Item ${i}`);
    },

    doFoo() {
      this.set('isFoo', true);
      this.get('on-foo')();
    },

    showMe() {
      this.set('showMe', true);
    }
  }
});
