module.exports = {
    production: {
        options: {
            cleancss: true,
            ieCompat: true, // ie 8 compatibility
            modifyVars: {
                'build-date': '"<%= project.buildDate %>"'
            }
        },
        files: {
            "<%= project.destStyles %>/main.css": "<%= project.style %>/main.less"
        }
    },
    development: {
        options: {
            cleancss: true,
            ieCompat: true // ie 8 compatibility
        },
        files: {
            "<%= project.style %>/main.css": "<%= project.style %>/main.less"
        }
    }
};
