$(function() {

    var App = {};
    App.Views = {};
    App.Collections = {};
    App.Models = {};


    /*****************
     *
     *  Views
     *
     ******************/

    App.Views.App = Backbone.View.extend({
        el: '.js-app',
        initialize: function() {
            var self = this;
            this.getSizes();
            $(window).on('resize', function(event) {
                self.resize(event);
            }).trigger('resize');
        },
        windowWidth: null,
        windowHeight: null,
        getSizes: function() {
            this.$window = $(window);
            this.windowWidth = this.$window.width();
            this.windowHeight = this.$window.height();
        },
        setSizes: function() {
            this.$('.js-home').css({
                'width': this.windowWidth,
                'height': this.windowHeight
            });
        },
        resize: function(e) {
            var self = this;

            $(window).off('resize');

            setTimeout(function() {
                self.getSizes();
                self.setSizes();
                $(window).on('resize', function(e) {
                    self.resize(e);
                });
            }, 700);
        }
    });


    /*****************
     *
     *  Initialize
     *
     ******************/

    var appView = new App.Views.App();
});