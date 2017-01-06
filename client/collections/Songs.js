// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  /*
    * This collection uses built-in Backbone properties, methods, and events
    * to populate itself with song data hosted on a remote server.
    *
    * Here's how it works:
    *   1. When instantiated, `fetch` sends a GET request to `url`
    *   2. `parse` transforms the raw response into an array of model objects
    *   3. The model objects are `set` on the collection
    *   4. A `sync` event is emitted on the collection containing the new data
    */

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch({
      data: { limit: 10 }
    });
  },

  model: SongModel

});