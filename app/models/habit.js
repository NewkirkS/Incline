import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  instances: DS.hasMany('instance', {async: true})
});
