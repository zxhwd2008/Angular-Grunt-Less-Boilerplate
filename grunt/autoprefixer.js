module.exports = {
    dist: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        files: {
            "<%= globalConfig.destStyles %>/main.prefixed.css": "<%= globalConfig.destStyles %>/main.css"
        }
    }
};