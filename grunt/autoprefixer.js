module.exports = {
    development: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        files: {
            "<%= project.style %>/main.css": "<%= project.style %>/main.css"
        }
    },
    production: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        files: {
            "<%= project.destStyles %>/main.prefixed.css": "<%= project.destStyles %>/main.css"
        }
    }
};
