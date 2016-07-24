module.exports = {
    styles: {
        files: ['<%= project.style %>/main.less'], // which files to watch
        tasks: ['less:development', 'autoprefixer:development']
    },
    js: {
      files: ['<%= project.src %>/**/*.js'], // which files to watch
      tasks: ['jshint']
    },
    livereload: {
      options: {
        livereload: '<%= connect.livereload.options.livereload %>'
      },
      files: [
        '<%= project.app %>/**/*.html',
        '<%= project.style %>/**/*.css'
      ]
    }
};
