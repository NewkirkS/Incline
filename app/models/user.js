import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  email: DS.attr(),
  habits: DS.hasMany('habit', {async: true})
});
