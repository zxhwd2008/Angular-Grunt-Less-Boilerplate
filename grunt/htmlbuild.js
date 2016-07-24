module.exports = {
    'app': {
        src: 'src/index.html',
        dest: '<%= project.dest %>/src/',
        options: {
            scripts: {
                bundle: [
                    '<%= project.destApp %>/<%= project.pkgname %>-<%= project.timestamp %>.libs.min.js'
                ],
                app: [
                    '<%= project.destApp %>/<%= project.pkgname %>-<%= project.timestamp %>.app.min.js'
                ]
            }
        }
    }
};
