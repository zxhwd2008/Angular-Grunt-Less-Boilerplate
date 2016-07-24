module.exports = {
  options: {
    inline: true,
    context : {
      DEBUG: false
    }
  },
  production : {
    src: [
      '<%= project.dest %>/index.html',
      '<%= project.dest %>/{,*/}app.js'
    ]
  },
  development: {
    src: [
      '<%= project.src %>/index.html'
    ]
  }
};
