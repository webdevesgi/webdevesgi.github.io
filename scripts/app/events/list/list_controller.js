WDE.module('EventsApp.List', function(List, WDE, Backbone, Marionette, $, _) {

  List.Controller = {
    listEvents: function() {
      var events = WDE.request('event:entities')

      var eventsListView = new List.Events({
        collection: events
      })

      WDE.page.show(eventsListView)
    }
  }

})
