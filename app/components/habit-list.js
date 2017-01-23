import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addInstance(params) {
      this.sendAction("addInstance", params);
    }
  }
});
