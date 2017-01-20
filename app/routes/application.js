import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn(provider) {
      var that = this;
      this.get('session').open('firebase', {provider: provider}).then(function(data) {
        // console.log(data); REMOVE WHEN DONE
        that.refresh();
      });
    },
    signOut() {
      this.get('session').close();
      this.transitionTo('signout');
    }
  }
});
