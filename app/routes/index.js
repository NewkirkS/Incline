import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  model() {

    var authenticated = this.get("session").get("isAuthenticated");
      if (authenticated) {
        var userId = this.get("session").get("currentUser.uid");
        return this.store.query("habit", { orderBy: "uid", equalTo: userId });
      }
  },
  actions: {
    signIn(provider) {
      var that = this;
      this.get('session').open('firebase', {provider: provider}).then(function(data) {
        // console.log(data); REMOVE WHEN DONE
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
    consoleLog() {
      var userId = this.get("session").get("currentUser.uid");
      var log = this.store.query("habit", { filter: { uid: MQmJNFPTYcS0qTK3wXFwC59L3W62 } });
      console.log(userId);
    }
  }
});
