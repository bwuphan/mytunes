// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this)
  },

  enqueue: function() {
    if(this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function() {
    this.shift();
  },

  ended: function() {
    this.at(0).dequeue();
    if(this.length > 0){
      this.playFirst();
    }
  }

});
