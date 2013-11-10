(function() {

  'use strict';

  var WDE = new Backbone.Marionette.Application()

  WDE.config = {
    apiUrl: 'http://localhost:3000'
  }

  WDE.addRegions({
      header: '.container>header'
    , page:   '.container>.page'
    , footer: '.container>footer'
  })

  WDE.on('initialize:after', function() {
    Backbone.history.start
  })

  WDE.start()

})()

