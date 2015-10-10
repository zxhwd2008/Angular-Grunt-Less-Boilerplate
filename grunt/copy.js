module.exports = {
    app: {
        files: [
            {
                expand: true,
                src: [
                    '<%= globalConfig.src %>/**',
                    '!<%= globalConfig.src %>/**/*.js',
                    '!<%= globalConfig.src %>/*.js'
                ],
                dest: '<%= globalConfig.dest %>/',
                filter: 'isFile'
            }
        ]
    },
    lib: {
        files: [
            {
                expand: true,
                src: [
                    '<%= globalConfig.lib %>/**',
                    '!<%= globalConfig.lib %>/**/*.js',
                    '!<%= globalConfig.lib %>/*.js'
                ],
                dest: '<%= globalConfig.dest %>/',
                filter: 'isFile'
            }
        ]
    }
};