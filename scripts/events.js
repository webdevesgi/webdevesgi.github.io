(function() {

  'use strict';

  WDE.module('Events', function() {

    // Event Model
    Events.Event = Backbone.Model.extend({
      defaults: {
          id: 1
        , title: ''
        , created_at: 0
        , updated_at: 0
      },

      initialize: function() {
        if(this.isNew()) {
          var date = Date.now()
          this.set({
              created_at: date
            , update_at: date
          })
        }
      }
    })

    // Event Collection
    Events.EventList = Backbone.Collection.extend({
      model: Events.Event
    })
  })

})()
