import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  name: DS.attr(),
  instances: DS.hasMany('instance', {async: true}),
});
