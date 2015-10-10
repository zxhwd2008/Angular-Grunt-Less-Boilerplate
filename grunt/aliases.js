module.exports = {
    'compileLess': [
        'watch:styles'
    ],
    'build': [
        'clean:dist',
        'jshint',
        //'karma:local',
        'ngAnnotate',
        'less:production',
        'autoprefixer',
        'cssmin',
        'concat:libs',
        'concat:app',
        'uglify',
        'clean:middleBuild',
        'copy',
        'htmlbuild'
    ]
};