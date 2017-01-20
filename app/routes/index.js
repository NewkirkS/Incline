import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  model() {

    var authenticated = this.get("session").get("isAuthenticated");
      if (authenticated) {
        var uid = this.get("session").get("currentUser.uid");
        // return Ember.RSVP.hash({
        //   habits: this.store.query("habit", { filter: { uid: uid} })
        // });
        return this.store.query("habit", { filter: { uid: uid} });
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
      this.transitionTo("signout");
    },
    newHabit(params) {
      var newHabit = this.store.createRecord('habit', params);
      newHabit.save();
    }
  }
});
