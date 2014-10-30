$(function () {

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
			'click .js-goDownBtn': 'goDown',
			'click .js-arrowLeft': 'slideLeft',
			'click .js-arrowRight': 'slideRight'
		},
		slideLeft: function (e) {
			e.preventDefault();
			this.$('.js-sliderLeft').click();
			console.log(this.carousel.getNext());
		},
		slideRight: function (e) {
			e.preventDefault();
			this.$('.js-sliderRight').click();
		},
		goDown: function (e) {
			e.preventDefault();
			this.$('.js-mainMenu').find('.main-menu__item:first .main-menu__link').trigger('click');
		},
		showMenu: function () {
			self.$('.js-mainMenu').css({
				'top': 0
			});
		},
		hideMenu: function () {
			self.$('.js-mainMenu').css({
				'top': -300
			});
		},
		showSkype: function () {
			self.$('.js-skypeMe').css({
				'opacity': 1,
				'right': 10
			});
		},
		hideSkype: function () {
			self.$('.js-skypeMe').css({
				'opacity': 0,
				'right': -300
			});
		},
		initialize: function () {
			var self = this;
			this.getSizes();
			// Resize
			$(window).on('resize', function (event) {
				self.resize(event);
			}).trigger('resize');

			// Scroll
			$(window).on('scroll', function (event) {
				if ($(window).scrollTop() > self.windowHeight - 140) {
					self.showMenu();
					self.showSkype();
				} else {
					self.hideMenu();
					self.hideSkype();
				}
			}).trigger('scroll');

			// Menu
			this.$('.js-mainMenu').singlePageNav({
				offset: $('.js-mainMenu').outerHeight(),
				filter: ':not(.external)',
				updateHash: true,
				currentClass: 'active',
				beforeStart: function () {

				},
				onComplete: function () {

				}
			});

			// Ocarousel
			this.carousel = new Ocarousel(this.$('.ocarousel'));

			// Colorbox
			this.$('.js-colorbox').colorbox({
				rel: 'gal'
			});
		},
		windowWidth: null,
		windowHeight: null,
		getSizes: function () {
			this.$window = $(window);
			this.windowWidth = this.$window.width();
			this.windowHeight = this.$window.height();
		},
		setSizes: function () {
			// Home
			this.$('.js-home').css({
				'width': this.windowWidth,
				'height': this.windowHeight
			});

			// Slider
			this.$('.js-sliderWindow').css({
				'padding-left': this.windowWidth / 2 - 400
			});

			// Slider dots
			/*var $dots = this.$('.js-sliderDots');
			console.log($dots.find('circle').eq(0).attr('cx'));
			console.log(this.carousel.render());
			this.carousel.remove(1);*/
		},
		resize: function (e) {
			var self = this;

			$(window).off('resize');

			setTimeout(function () {
				self.getSizes();
				self.setSizes();
				$(window).on('resize', function (e) {
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