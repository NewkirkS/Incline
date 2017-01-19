import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    newHabit() {
      var params = {
        name: this.get("name"),
      };
      if (params.name === undefined) {
        alert("Please enter a name for your new habit.");
      } else {
        this.sendAction("newHabit", params);
      }
    }
  }
});
