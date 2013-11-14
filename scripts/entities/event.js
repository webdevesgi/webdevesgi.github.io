WDE.module('Entities', function(Entities, WDE, Backbone, Marionette, $, _) {

  Entities.Event = Backbone.Model.extend({})

  Entities.EventCollection = Backbone.Collection.extend({
    model: Entities.Event
  })

  var events

  var initializeEvents = function() {
    var today = new Date(),
        yesterday = new Date()
    yesterday.setDate(today.getDate()-1)
    events = new Entities.EventCollection([
      { id: 1, title: 'My First Event', created_at: yesterday },
      { id: 2, title: 'My Second Event', created_at: today }
    ])
  }

  var API = {
    getEventEntities: function() {
      if(typeof events === 'undefined' || _.isEmpty(events)) {
        initializeEvents()
      }
      return events
    }
  }

  WDE.reqres.setHandler('event:entities', function() {
    return API.getEventEntities()
  })

})
