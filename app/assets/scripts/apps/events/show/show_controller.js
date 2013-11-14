;(function(win, doc, WDE) {

  'use strict';

  WDE.module('EventsApp.Show', function(Show, WDE, Backbone, Marionette, $, _) {

    Show.Controller = {
      showEvent: function(model) {
        var eventView = new Show.Event({
          model: model
        })

        WDE.page.show(eventView)
      }
    }

  })

})(window, window.document, window.WDE || (window.WDE = {}))
