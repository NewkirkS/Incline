import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    signOut() {
      this.get('session').close();
      this.transitionTo('index');
    }
  }
});
