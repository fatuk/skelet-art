module.exports = {
    options: {
        plugins: [{
            removeViewBox: false
        }]
    },
    dist: {
        files: [{
            cwd: "svg.src/",
            src: "*.svg",
            dest: "img/",
            expand: true
        }]
    }
};