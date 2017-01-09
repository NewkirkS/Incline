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
      //validate username
      //validate password
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.loginUser(params);
    },
    loginUser(params) {

    },
  }
});
