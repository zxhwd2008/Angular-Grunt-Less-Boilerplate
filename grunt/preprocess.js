module.exports = {
  options: {
    inline: true,
    context : {
      DEBUG: false
    }
  },
  production : {
    src: [
      '<%= globalConfig.dest %>/index.html',
      '<%= globalConfig.dest %>/{,*/}app.js'
    ]
  },
  development: {
    src: [
      '<%= globalConfig.dev %>/index.html'
    ]
  }
};
