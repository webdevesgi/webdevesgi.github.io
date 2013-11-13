WDE.module('Entities', function(Entities, WDE, Backbone, Marionette, $, _) {

  Entities.Event = Backbone.Model.extend({})

  Entities.EventCollection = Backbone.Collection.extend({
    model: Entities.Event
  })

  var events

  var initializeEvents = function() {
    events = new Entities.EventCollection([
      { id: 1, title: 'My First Event' },
      { id: 2, title: 'My Second Event' }
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
