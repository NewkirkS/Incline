import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    addInstance(habit) {
      var params = {
        uid: this.get("session").get("currentUser.uid"),
        timestamp: moment().format("YYYY-MM-DD"),
        habit: habit
      };
      this.sendAction("addInstance", params);
    }
  }
});
