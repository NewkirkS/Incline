import Ember from 'ember';

export default Ember.Route.extend({
  authentication: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      //If user = true, return habits where habits.user = user

    });
  },
  actions: {
    createUser(params) {
      this.get("authentication").validateUsername(params.username);
      this.get("authentication").validatePassword(params.password);
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      // this.loginUser(params);
    },
    loginUser(params) {

    },
  }
});
