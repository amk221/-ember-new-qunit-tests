import Component from '@ember/component';

export default Component.extend({
  actions: {
    show() {
      this.set('show', true);
    }
  }
});
