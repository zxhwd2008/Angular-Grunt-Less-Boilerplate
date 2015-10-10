module.exports = {
    files: ['Gruntfile.js', 'test/karma.conf.js', '<%= globalConfig.src %>/**/*.js'],
    options: {
        jshintrc: '.jshintrc'
    }
};