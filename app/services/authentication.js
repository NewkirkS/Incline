import Ember from 'ember';

export default Ember.Service.extend({
  authenticatied: false,
  user: null,
  logIn(params) {
    //retrieve user record where username = input
    //if password hash in db = hash of password input make user = db user
    //else error
  },
  logOut() {
    this.toggleProperty("authenticated");
    this.set("user", null);
  }
});
