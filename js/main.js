$(function () {

	var App = {};
	App.Views = {};
	App.Collections = {};
	App.Models = {};
	App.Router = {};


	/*****************
	 *
	 *  Views
	 *
	 ******************/

	App.Views.App = Backbone.View.extend({
		el: '.js-app',
		events: {
			'click .js-goDownBtn': 'goDown',
			'click .js-arrowLeft, .js-sliderBtnLeft': 'slideLeft',
			'click .js-arrowRight, .js-sliderBtnRight': 'slideRight',
		},
		slideLeft: function (e) {
			e.preventDefault();
			this.$('.js-sliderLeft').click();

			var currentSlide = parseInt(this.$('.js-currentSlide').text(), 10);
			this.$('.js-arrow').removeClass('disabled');
			if (currentSlide === 1) {
				this.$('.js-arrowLeft').addClass('disabled');
				this.$('.js-arrowLeftLock').show();
				this.$('.js-sliderBtnLeft').hide();
			} else {
				this.$('.js-arrowLeftLock').hide();
				this.$('.js-sliderBtnLeft').show();
			}
			if (currentSlide > 1) {
				this.$('.js-arrowRightLock').hide();
				this.$('.js-sliderBtnRight').show();
			}
		},
		slideRight: function (e) {
			e.preventDefault();
			this.$('.js-sliderRight').click();

			var currentSlide = parseInt(this.$('.js-currentSlide').text(), 10);

			this.$('.js-arrow').removeClass('disabled');
			if (currentSlide === this.slidesCount) {
				this.$('.js-arrowRight').addClass('disabled');
				this.$('.js-arrowRightLock').show();
				this.$('.js-sliderBtnRight').hide();
			} else {
				this.$('.js-arrowRightLock').hide();
				this.$('.js-sliderBtnRight').show();
			}
			if (currentSlide > 1) {
				this.$('.js-arrowLeftLock').hide();
				this.$('.js-sliderBtnLeft').show();
			}
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
		slidesCount: 0,
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
				offset: $('.js-mainMenu').outerHeight() - 2,
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

			// Get slides count
			this.slidesCount = this.$('.js-sliderWindow').find('li').length;
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

				// Calc slider buttons
				self.$('.js-sliderBtn').css({
					'width': (self.windowWidth - 800 - (70 * 2)) / 2
				});
				$(window).on('resize', function (e) {
					self.resize(e);
				});
			}, 700);
		}
	});


	/*****************
	 *
	 *  Router
	 *
	 ******************/

	App.Router.App = Backbone.Router.extend({
		routes: {
			'': 'home',
			'home': 'home',
			'process': 'process',
			'projects': 'projects',
			'team': 'team',
			'contacts': 'contacts'
		},
		setActiveSection: function (id) {

		},
		home: function () {
			setTimeout(function () {
				$('a[href="#home"]').click();
			}, 1000);
		},
		process: function () {
			setTimeout(function () {
				$('a[href="#process"]').click();
			}, 1000);
		},
		projects: function () {
			setTimeout(function () {
				$('a[href="#projects"]').click();
			}, 1000);
		},
		team: function () {
			setTimeout(function () {
				$('a[href="#team"]').click();
			}, 1000);
		},
		contacts: function () {
			setTimeout(function () {
				$('a[href="#contacts"]').click();
			}, 1000);
		}
	});


	/*****************
	 *
	 *  Initialize
	 *
	 ******************/

	var appView = new App.Views.App();

	var router = new App.Router.App();
	Backbone.history.start();
});