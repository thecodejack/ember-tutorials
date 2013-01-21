(function( win ) {
	'use strict';
/**************************
* Application
**************************/

win.Songs = Ember.Application.create({
    mixmaster: 'Andy',
    totalReviews: 0,
    ready: function(){
        console.log('in Application read');
    }
});

/**************************
* Models
**************************/

Songs.Song = Ember.Object.extend({
    title: null,
    artist: null,
    genre: null,
    listens: 0
});

/**************************
* Controllers
**************************/

Songs.songsController = Ember.ArrayController.create({
    content: [],
    init: function(){
        // create an instance of the Song model
        var song = Songs.Song.create({
            title: 'Son of the Morning',
            artist: 'Oh, Sleeper',
            genre: 'Screamo'
        });
        this.pushObject(song);
    }
});


var mySong = Songs.Song.create({
    title: 'Son of the Morning',
    artist: 'Oh, Sleeper',
    genre: 'Screamo'
});

/**************************
* Views
**************************/
Songs.ReviewTextArea = Ember.TextArea.extend({
    placeholder: 'Enter your review'
});



})( window );