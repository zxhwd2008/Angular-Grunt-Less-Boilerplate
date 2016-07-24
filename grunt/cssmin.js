module.exports = {
    dist: {
        options: {
            banner: '/*! <%= project.pkgname %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
            '<%= project.destStyles %>/main.css': '<%= project.destStyles %>/main.prefixed.css'
        }
    }
};
