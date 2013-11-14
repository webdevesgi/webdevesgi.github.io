WDE.module('EventsApp.List', function(List, WDE, Backbone, Marionette, $, _) {
  List.Event = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#event-list-item',

    events: {
      'click td a.js-show': 'showClicked'
    },

    showClicked: function(e) {
      e.preventDefault()
      this.trigger('event:show', this.model)
    }
  })

  List.Events = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#event-list',
    itemView: List.Event,
    itemViewContainer: 'tbody'
  })
})
