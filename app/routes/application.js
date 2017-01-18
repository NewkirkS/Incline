import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn() {
      this.get('session').open('firebase', {provider: "google"}).then(function(data) {
        console.log(data);
      });
    },
    signOut() {
      this.get('session').close();
      this.transitionTo('index');
    }
  }
});
