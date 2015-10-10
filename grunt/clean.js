module.exports = {
    dist: [
        '<%= globalConfig.dest %>'
    ],
    middleBuild: [
        '<%= globalConfig.dest %>/*.js',
        '!<%= globalConfig.dest %>/*.min.js'
    ]
};