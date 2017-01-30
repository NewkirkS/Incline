import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      habit: this.store.findRecord('habit', params.habit_id),
      instances: this.store.query("instance", { orderBy: "habit", equalTo: params.habit_id }),
    });
  },

  actions: {
    renderChart(instances) {

    var valueArray = [];

    instances.forEach(function(instance) {
      var timestamp = instance.get('timestamp');
      if (valueArray.length === 0) {
        valueArray.push([timestamp, 1]);
      } else if (timestamp === valueArray[valueArray.length - 1][0]) {
        valueArray[valueArray.length - 1][1] += 1;
      } else {
        valueArray.push([timestamp, 1]);
      }
    });

    //MAKE YEAR DYNAMIC!!!! v

    var myConfig = {
      "type":"calendar",
      "options":{
        "year":{
          "text":2017,
          "font-color":"#666699",
          "font-family":"Georgia, serif",
        },
      "start-month":1,
      "end-month":12,
      "firstday":"s",
      "values": valueArray,
      "plotarea":{
    	  "margin-top":"30%",
    	  "margin-bottom":"50%"
    	}
      }
    };

    return zingchart.render({
      id : 'myChart',
      data : myConfig,
      height: 150,
      width: 700,
      modules : 'calendar'
    });
    },
  }
});
