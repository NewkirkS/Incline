import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr(),
  hasDuration: DS.attr(),
  hasCount: DS.attr(),
  duration: DS.attr(),
  count: DS.attr(),
  habit: DS.belongsTo('habit', {async: true})
});
