WDE.module('EventsApp.List', function(List, WDE, Backbone, Marionette, $, _) {
  List.Event = Marionette.ItemView.extend({
    tagName: 'li',
    template: '#event-template'
  })

  List.Events = Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: List.Event
  })
})
