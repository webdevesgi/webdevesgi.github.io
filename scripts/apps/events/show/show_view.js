WDE.module('EventsApp.Show', function(Show, WDE, Backbone, Marionette, $, _) {

  Show.Event = Marionette.ItemView.extend({
    template: '#event-view'
  })

})
