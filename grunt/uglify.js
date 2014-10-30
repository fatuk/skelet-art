module.exports = {
	dist: {
		options: {
			sourceMap: false
		},
		files: {
			'vendors/plugins.min.js': [
				'bower_components/jquery/dist/jquery.js',
				'bower_components/jQuery-Open-Carousel/jquery.openCarousel.js',
				'bower_components/single-page-nav/jquery.singlePageNav.min.js',
				'bower_components/underscore/underscore.js',
				'bower_components/backbone/backbone.js',
				'bower_components/colorbox/jquery.colorbox-min.js',
				'bower_components/colorbox/i18n/jquery.colorbox-ru.js'
			]
		}
	}
};