module.exports = {
    production: {
        options: {
            cleancss: true,
            ieCompat: true, // ie 8 compatibility
            modifyVars: {
                'build-date': '"<%= globalConfig.buildDate %>"'
            }
        },
        files: {
            "<%= globalConfig.dest %>/styles/main.css": "<%= globalConfig.style %>/main.less"
        }
    },
    development: {
        options: {
            cleancss: true,
            ieCompat: true // ie 8 compatibility
        },
        files: {
            "<%= globalConfig.style %>/main.css": "<%= globalConfig.style %>/main.less"
        }
    }
};