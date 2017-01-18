import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    signIn() {
      this.sendAction('signIn', "google");
    },
    signOut() {
      this.sendAction('signOut');
    },
  }
});
