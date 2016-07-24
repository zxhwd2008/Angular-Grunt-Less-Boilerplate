module.exports = {
    options: {
        banner: '/*! <%= project.pkgname %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    dist: {
        files: {
            '<%= project.destApp %>/<%= project.pkgname %>-<%= project.timestamp %>.libs.min.js':
                ['<%= concat.libs.dest %>'],
            '<%= project.destApp %>/<%= project.pkgname %>-<%= project.timestamp %>.app.min.js':
                ['<%= concat.app.dest %>']
        }
    }
};
