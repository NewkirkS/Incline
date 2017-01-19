import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    newHabit() {
      var params = {
        uid: this.get("session").get("currentUser.uid"),
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
