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
    // createUser(params) {
    //   Firebase.auth().createUserWithEmailAndPassword(params.email, params.password).catch(function(error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     if (errorCode === 'auth/weak-password') {
    //       alert('The password is too weak');
    //     } else {
    //       alert(errorMessage);
    //     }
    //   });
    // },
    signIn(provider) {
      this.get('session').open('firebase', {provider: provider}).then(function(data) {
        console.log(data);
      });
    },
    signOut() {
      this.get('session').close();
    },
    session() {
      return this.get("session").fetch("google");
    },
  }
});
