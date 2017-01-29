import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    addInstance(habit) {
      var params = {
        timestamp: moment().format("YYYY-MM-DD"),
        habit: habit
      };
      this.sendAction("addInstance", params);
    }
  }
});
