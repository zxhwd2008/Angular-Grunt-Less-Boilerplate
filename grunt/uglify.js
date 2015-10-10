module.exports = {
    options: {
        banner: '/*! <%= globalConfig.pkgname %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    dist: {
        files: {
            '<%= globalConfig.destApp %>/<%= globalConfig.pkgname %>-<%= globalConfig.timestamp %>.libs.min.js':
                ['<%= concat.libs.dest %>'],
            '<%= globalConfig.destApp %>/<%= globalConfig.pkgname %>-<%= globalConfig.timestamp %>.app.min.js':
                ['<%= concat.app.dest %>']
        }
    }
};