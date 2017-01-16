import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  authenticated: Ember.computed("currentUser", function(){
    if (this.get("currentUser") === null) {
      return false;
    } else {
      return true;
    }
  }),
  logIn(params) {
    //retrieve user record where username = input
    //if password hash in db = hash of password input make user = db user
    //else error
  },
  logOut() {
    this.set("currentUser", null);
  },
  checkUsernameUnique(username){
    var = this.store.findAll('user');

  },
  validateUsername(username) {
    //Current valdation passable but weak. Strengthen later.
    if (username.length < 4 || username.length > 14 || username.match(/[ ]/) != null){
      alert("Please enter a valid username");
    } else if(checkUsernameUnique(username)) {
      alert("This username is taken. Please try another.")
    } else {
      return true;
    }
  },
  validatePassword(password) {
    if (password.length < 8 || password.match(/[+-=_:;|!@#$%^&*1234567890]/) === null || password.match(/[ ]/) != null){
      alert("Please enter a secure password (8 or more chars with at least one number or symbol)");
    } else {
      return true;
    }
  }
});
