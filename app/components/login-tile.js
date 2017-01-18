import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    createUser() {
      var params = {
        username: this.get('new-username'),
        password: this.get('new-password')
      };
      if (params.username === undefined || params.password === undefined) {
        alert("Please fill out all fields.");
      } else {
        this.sendAction('createUser', params);
        this.set('username', undefined);
        this.set('password', undefined);
      }
    },
    signIn() {
      this.sendAction('signIn', "google");
    },
    signOut() {
      this.sendAction('signOut');
    },
  }
});
