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
  },
  validateUsername(username) {
    //Does not check for uniqueness. Handled by route due to db request.
    if (username.length < 4 || username.length > 14 || username.match(/[ ]/) != null){
      alert("Please enter a valid username");
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
