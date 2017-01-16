import Ember from 'ember';

export default Ember.Component.extend({
  authentication: Ember.inject.service(),
  actions: {
    createUser() {
      var params = {
        username: this.get('create-username'),
        password: this.get('password')
      };
      if (params.username === undefined || params.password === undefined) {
        alert("Please fill out all fields.");
      } else {
        this.sendAction('createUser', params);
        this.set('username', undefined);
        this.set('password', undefined);
      }
    },
    loginUser() {

    },
  }
});
