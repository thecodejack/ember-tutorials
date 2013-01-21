/**************************
* Application
**************************/

App = Em.Application.create();


/**************************
* Models
**************************/

App.Contact = DS.Model.extend({
	name: DS.attr('string'),
    contact_number: DS.attr('string')
});





/**************************
* Store
**************************/

/*App.store=DS.Store.create({
	revision: 4,
	adapter: DS.Adapter.create({
		findAll : function(store,type){
			store.loadMany(type, [{name:"SADFGGAS",contact_number:"sdaasdf"},{name:"CHeck",contact_number:"sdaasdf"}]);
		}
	})
});

var person1=App.store.createRecord(App.Contact,  { name: "Brohuda",  contact_number : "43534685"});
*/

/**************************
* Views
**************************/


App.DateTextField = Em.TextField.extend({
    // insertNewline: function(){
    //     App.contactsController.loadTweets();
    // }

    didInsertElement: function() {
    	// Ember.run.next(this, function(){
    	 	this.$().DatePicker({
		format : 'Y-m-d',
		date : this.$().val(),
		current : this.$().val(),
		starts : 1,
		position : 'bottom',
		calendars : 2,
		placeholder: this.$(),
		onChange : function(formated, dates,placeholder) {
			$(placeholder).val(formated);
			$(placeholder).DatePickerHide();
		}
	});
    //	 })
        }
    

});


App.GraphView = Em.View.extend({
	template:Ember.Handlebars.compile("<h1>{{view.xlabel}}<h1><div class='chart' style='width:100%;height:200px;'></div>"),
	bars:false,
	lines:true,
	points:true,
	xlabel:"Product Line",
	ylabel:"Scale",
	labelfontsize: '10px',
	d1: JSON.parse("[[[0,21],[1,87.23]]]"),
	labelsText: ['Casper Navy','Casper Melange'],
	noOfBars: function(){
		return this.get('d1').length;
	}.property('d1'),

	gridMarkings : [{ color:"black", lineWidth: 1, yaxis: { from: 0,to:0 }},
                { color:"black", lineWidth: 1.5, xaxis: { from: -0.5,to:-0.5}},						
			   ],
	graphColor : "#3590AC",
	init: function(){

	},
	didInsertElement: function(){
		this.drawChart();
	},
	drawChart: function(){
	var bars=this.get('bars');
	var lines=this.get('lines');
	var points=this.get('points');
	var graphColor=this.get('graphColor');
	var maxBars=this.get('noOfBars');
	var data=this.get('d1');
	if(maxBars<=10)
	{
		bars = true;
		maxBars = 9;
		lines = false;
		points = false;
	}
	else
	{
		bars = false;
		lines = true;
		points = true;
	}
	var xAxisTicks = this.get('labelsText');
	
	

	$.plot(this.$('.chart'),data,{
			series: {
					bars : {
					show : bars,
					barWidth : 0.5,
					align: "right",
					lineWidth:0,
					fill : true,
					fillColor:graphColor
				},
				lines: {show: lines,fillColor: graphColor,fill:false,lineWidth:2},
				points: {
					radius: 2,
					show: points,
					fill: true
				},	
			},
			grid : {
				hoverable : true,
				clickable : true,
				markings :this.get('gridMarkings'),
				borderWidth: 0
			},
			colors: [graphColor],
			xaxis : {
				min : -0.5,
				//max : maxBars,//noOfBars+1,
				tickLength: 2, // hide gridlines
				ticks: xAxisTicks,
				//tickWidth:0.5,
				axisLabel: this.get('xlabel'),
				axisLabelUseCanvas: true,
	            axisLabelFontSizePixels: 12,
	            axisLabelFontFamily: 'Arial',
	            axisLabelPadding: 15
			},
			yaxis : {
				min : 0,
				//tickLength: 8,
				/*tickWidth:100,*/
				axisLabel: this.get('ylabel'),
				axisLabelUseCanvas: true,
	            axisLabelFontSizePixels: 12,
	            axisLabelFontFamily: 'Arial',
	            axisLabelPadding: 5
			}
		});
	}

});


/**************************
* Controllers
**************************/

/*App.contactsController = Em.ArrayController.create({
	content: App.store.findAll(App.Contact),
	name: '',
	contact_no: '',
	date:'',
	addContact: function() {
		var me = this;
        var username = me.get("name");
        var contact_no=me.get("contact_no");
        var c=App.store.createRecord(App.Contact,  { name: username,  contact_number : contact_no});
        //me.pushObject(c);
        me.set("name","");
        me.set("contact_no","");
	},
	deleteContact: function(evnt){
		console.log(evnt);
		this.removeObject(evnt.context);
		evnt.context.destroy();
	}
});*/







