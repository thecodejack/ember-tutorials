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


/*App.Contact.FIXTURES = [{
	"name" : "ADSjh",
	"contact_number" : "43534685"
}, {
	"name" : "ADSDSFASjh",
	"contact_number" : "43435534685"
}, {
	"name" : "AasdAasdDSjh",
	"contact_number" : "43asd534685"
}];*/


// App.Contact = Em.Object.extend({
//     name: null,
//     contact_number: null
// });


/**************************
* Store
**************************/

App.store=DS.Store.create({
	revision: 4,
	adapter: DS.Adapter.create({
		findAll : function(store,type){
			store.loadMany(type, [{name:"SADFGGAS",contact_number:"sdaasdf"},{name:"CHeck",contact_number:"sdaasdf"}]);
		}
	})
});

var person1=App.store.createRecord(App.Contact,  { name: "Brohuda",  contact_number : "43534685"});

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


/**************************
* Controllers
**************************/

App.contactsController = Em.ArrayController.create({
	content: App.store.findAll(App.Contact),
	name: '',
	contact_no: '',
	date:'',
	test:'None',
	addContact: function() {
		var me = this;
		console.log(this.get('test'));
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
});







