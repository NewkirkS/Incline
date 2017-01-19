import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr(),
  habit: DS.belongsTo('habit', {async: true})
});
