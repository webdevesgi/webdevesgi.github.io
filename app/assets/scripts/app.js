;(function(win, doc) {

  'use strict';

  var WDE = window.WDE = new Backbone.Marionette.Application()

  WDE.addRegions({
    header: '.container>header',
    page:   '.container>.page',
    footer: '.container>footer'
  })


  WDE.on('initialize:after', function() {
    WDE.EventsApp.List.Controller.listEvents()
  })

  $('.past-events').on('click', function(e) {
    e.preventDefault()
    WDE.start()
  })

})(window, window.document)