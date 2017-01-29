import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  timestamp: DS.attr(),
  count: DS.attr(),
  habit: DS.belongsTo('habit', {async: true})
});
