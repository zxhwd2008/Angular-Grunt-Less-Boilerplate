module.exports = {
    styles: {
        files: ['<%= globalConfig.style %>/main.less'], // which files to watch
        tasks: ['less:development'],
        options: {
            spawn: false
        }
    }
};