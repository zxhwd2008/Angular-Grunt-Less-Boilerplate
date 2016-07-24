module.exports = {
    dist: [
        '<%= project.dest %>'
    ],
    middleBuild: [
        '<%= project.dest %>/*.js',
        '!<%= project.dest %>/*.min.js'
    ]
};
