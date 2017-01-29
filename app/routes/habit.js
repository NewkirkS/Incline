import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      habit: this.store.findRecord('habit', params.habit_id),
      instances: this.store.query("instance", { orderBy: "habit", equalTo: params.habit_id }),
      renderOptions: {
  height: 400,
  width: "100%",
  events: {
    node_click:function(p) {
      console.log(p);
    }
  },
  data: {
    "type":"line",
    "title":{
      "text":"Average Metric"
    },
    "series":[
      {
        "values":[69,68,54,48,70,74,98,70,72,68,49,69]
      },
      {
        "values":[51,53,47,60,48,52,75,52,55,47,60,48]
      },
      {
        "values":[42,43,30,40,31,48,55,46,48,32,38,38]
      },
      {
        "values":[25,15,26,21,24,26,33,25,15,25,22,24]
      }
    ]
  },
  defaults: {
    "palette" : {
      "line" : [
      ["#ffffff", "#196eed", "#196eed", "#196eed"],
      ["#ffffff", "#d94530", "#d94530", "#d94530"],
      ["#ffffff", "#fdb82b", "#fdb82b", "#fdb82b"],
      ["#ffffff", "#159755", "#159755", "#159755"],
      ["#ffffff", "#8e8e8e", "#8e8e8e", "#8e8e8e"]
      ]
    },
    "graph" : {
      "background-color":"#f9f9f9",
      "border-color":"#ddd",
      "border-width":"1px",
      "border-style":"solid",
      "border-radius":5,
      "title" : {
        "background-color" : "#5f9af3",
        "height":"30px",
        "align":"center",
        "font-color" : "#fff",
        "border-radius-top-left":5,
        "border-radius-top-right":5
      },
    }
  }
} // _renderOptions
    });
  },

  actions: {
    renderChart() {


    var myConfig = {
      "type":"calendar",
      "options":{
        "year":{
          "text":2016,
          "font-color":"#666699",
          "font-family":"Georgia, serif",
        },
      "start-month":1,
      "end-month":12,
      "firstday":"s",
      "values":[  //Provide your values data.
        ["2016-04-01",1, "April Fool's Day!"],
        ["2016-04-03",-2],
        ["2016-04-07",-1],
        ["2016-04-09",2],
        ["2016-04-13",5],
        ["2016-04-15",-4],
        ["2016-04-16",-5],
        ["2016-04-17",1],
        ["2016-04-28",3],
        ["2016-04-30",-3],
        ["2016-05-01",2, "May Flowers!"],
        ["2016-05-04",-1],
        ["2016-05-06",2],
        ["2016-05-07",3],
        ["2016-05-08",-5],
        ["2016-05-11",4],
        ["2016-05-12",-3],
        ["2016-05-20",-4],
        ["2016-05-22",5],
        ["2016-05-26",-3],
        ["2016-05-28",2],
        ["2016-06-01",3],
        ["2016-06-03",-2],
        ["2016-06-04",-4],
        ["2016-06-09",5]
        ],
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
