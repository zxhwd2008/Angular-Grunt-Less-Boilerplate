module.exports = {
    'app': {
        src: 'src/index.html',
        dest: '<%= globalConfig.dest %>/src/',
        options: {
            scripts: {
                bundle: [
                    '<%= globalConfig.destApp %>/<%= globalConfig.pkgname %>-<%= globalConfig.timestamp %>.libs.min.js'
                ],
                app: [
                    '<%= globalConfig.destApp %>/<%= globalConfig.pkgname %>-<%= globalConfig.timestamp %>.app.min.js'
                ]
            }
        }
    }
};