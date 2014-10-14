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
        events: {
            'click .js-goDownBtn': 'goDown'
        },
        goDown: function(e) {
            e.preventDefault();
            this.$('.js-mainMenu').find('.main-menu__item:first .main-menu__link').trigger('click');
        },
        showMenu: function() {
            self.$('.js-mainMenu').css({
                'top': 0
            });
        },
        hideMenu: function() {
            self.$('.js-mainMenu').css({
                'top': -300
            });
        },
        initialize: function() {
            var self = this;
            this.getSizes();
            // Resize
            $(window).on('resize', function(event) {
                self.resize(event);
            }).trigger('resize');

            // Scroll
            $(window).on('scroll', function(event) {
                if ($(window).scrollTop() > self.windowHeight - 140) {
                    self.showMenu();
                } else {
                    self.hideMenu();
                }
            }).trigger('scroll');

            // Menu
            this.$('.js-mainMenu').singlePageNav({
                offset: $('.js-mainMenu').outerHeight(),
                filter: ':not(.external)',
                updateHash: true,
                currentClass: 'active',
                beforeStart: function() {

                },
                onComplete: function() {

                }
            });
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