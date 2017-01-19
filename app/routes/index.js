import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  model() {
    return Ember.RSVP.hash({
      //If user = true, return habits where habits.user = user

    });
  },
  actions: {
    signIn(provider) {
      this.get('session').open('firebase', {provider: provider}).then(function(data) {
        console.log(data);
      });
    },
    signOut() {
      this.get('session').close();
    },
    newHabit(params) {
      var newHabit = this.store.createRecord('habit', params);
      newHabit.save();
    }
  }
});
