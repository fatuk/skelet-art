module.exports = {
    dist: {
        options: {
            sourceMap: false
        },
        files: {
            'vendors/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/fractionslider/jquery.fractionslider.min.js',
                'bower_components/underscore/underscore.js',
                'bower_components/backbone/backbone.js'
            ]
        }
    }
};