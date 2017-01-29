import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  uid: DS.attr(),
  name: DS.attr(),
  instances: DS.hasMany('instance', {async: true}),
  
});
