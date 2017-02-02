import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  model() {

    var authenticated = this.get("session").get("isAuthenticated");
      if (authenticated) {
        var userId = this.get("session").get("currentUser.uid");
        return Ember.RSVP.hash({
          habits: this.store.query("habit", {
            orderBy: "uid",
            equalTo: userId,
          })
        });
      }
  },
  actions: {
    signIn(provider) {
      var that = this;
      this.get('session').open('firebase', {provider: provider}).then(function() {
        that.refresh();
      });
    },
    signOut() {
      this.get('session').close();
      this.store.unloadAll();
    },
    newHabit(params) {
      var newHabit = this.store.createRecord('habit', params);
      newHabit.save();
    },
    addInstance(params) {
      var newInstance = this.store.createRecord('instance', params);
      var habit = params.habit;

      habit.get('instances').addObject(newInstance);
      newInstance.save().then(function() {
        return habit.save();
      });
    },
    consoleLog() {

      console.log(moment().format("YYYY"));
    }
  }
});
