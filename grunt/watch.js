module.exports = {
    styles: {
        files: ['<%= globalConfig.style %>/main.less'], // which files to watch
        tasks: ['less:development'],
        options: {
            spawn: false
        }
    },
    livereload: {
      options: {
        livereload: '<%= connect.livereload.options.livereload %>'
      },
      files: [
        '<%= globalConfig.src %>/{,*/}*.html',
        '<%= globalConfig.style %>/{,*/}*.css'
      ]
    }
};
