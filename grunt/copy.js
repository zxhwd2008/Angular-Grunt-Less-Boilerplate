module.exports = {
    app: {
        files: [
            {
                expand: true,
                src: [
                    '<%= project.app %>/**',
                    '!<%= project.app %>/**/*.js',
                    '!<%= project.app %>/*.js'
                ],
                dest: '<%= project.dest %>/',
                filter: 'isFile'
            }
        ]
    },
    lib: {
        files: [
            {
                expand: true,
                src: [
                    '<%= project.lib %>/**',
                    '!<%= project.lib %>/**/*.js',
                    '!<%= project.lib %>/*.js'
                ],
                dest: '<%= project.dest %>/',
                filter: 'isFile'
            }
        ]
    }
};
