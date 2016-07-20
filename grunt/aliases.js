module.exports = {
  'server': [
    'env:dev',
    'preprocess:development',
    'less:development',
    'autoprefixer:development',
    'jshint',
    'connect:livereload',
    'watch'
  ],
  'build': [
    'clean:dist',
    'jshint',
    //'karma:local',
    'ngAnnotate',
    'less:production',
    'autoprefixer:production',
    'cssmin',
    'concat:libs',
    'concat:app',
    'env:prod',
    'preprocess:production',
    'uglify',
    'clean:middleBuild',
    'copy',
    'htmlbuild'
  ]
};
