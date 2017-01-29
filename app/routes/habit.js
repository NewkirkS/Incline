import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      habit: this.store.findRecord('habit', params.habit_id),
      instances: this.store.query("instance", { orderBy: "habit", equalTo: params.habit_id })
    });
  },

  actions: {
    deleteHabit() {

    },
  }
});
