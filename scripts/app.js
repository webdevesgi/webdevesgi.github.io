(function() {

  'use strict';

  var WDE = new Backbone.Marionette.Application()

  WDE.config = {
    apiUrl: 'http://localhost:3000'
  }

  WDE.addRegions({
    header: '.container>header',
    page:   '.container>.page',
    footer: '.container>footer'
  })


  // Event Model
  WDE.Event = Backbone.Model.extend({
    defaults: {
      id: 1,
      title: '',
      created_at: 0,
      updated_at: 0
    },
    initialize: function() {
      if(this.isNew()) {
        var date = Date.now()
        this.set({
          created_at: date,
          update_at: date
        })
      }
    }
  })

  // Event Collection
  WDE.EventsList = Backbone.Collection.extend({
    model: WDE.Event
  })

  WDE.EventItemView = Marionette.ItemView.extend({
    template: '#event-template',
    tagName: 'li'
  })

  WDE.EventsListView = Marionette.CollectionView.extend({
    tagName: 'ul',
    itemView: WDE.EventItemView
  })

  WDE.on('initialize:after', function() {
    Backbone.history.start()
    var eventsList = new WDE.EventsList()
    var req = $.ajax({
      url: WDE.config.apiUrl + '/events',
      type: 'GET'
    })
    req.done(function(res){
      if(_.isArray(res) && res.length) {
        eventsList.add(res)
        var eventsListView = new WDE.EventsListView({
          collection: eventsList
        })
        WDE.page.show(eventsListView)
      }
    })
  })

  WDE.start()

})()

