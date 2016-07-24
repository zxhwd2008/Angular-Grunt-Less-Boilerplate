module.exports = {
  livereload: {
    options: {
      port: 9000,
      hostname: 'localhost',
      livereload: 35729,
      open: true,
      base: [
        '<%= project.src %>'
      ]
    }
  }
};
