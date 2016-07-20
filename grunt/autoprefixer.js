module.exports = {
    development: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        files: {
            "<%= globalConfig.style %>/main.css": "<%= globalConfig.style %>/main.css"
        }
    },
    production: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        files: {
            "<%= globalConfig.destStyles %>/main.prefixed.css": "<%= globalConfig.destStyles %>/main.css"
        }
    }
};
