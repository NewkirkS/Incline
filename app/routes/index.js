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
      firebase.auth().createUserWithEmailAndPassword(params.email, params.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak');
        } else {
          alert(errorMessage);
        }
      });
      // this.loginUser(params);
    },
    loginUser(params) {

    },
  }
});
