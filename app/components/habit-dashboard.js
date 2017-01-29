import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    logModel(model) {
      console.log(model);
    }
  }
});
