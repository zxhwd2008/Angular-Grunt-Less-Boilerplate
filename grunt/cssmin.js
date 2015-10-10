module.exports = {
    dist: {
        options: {
            banner: '/*! <%= globalConfig.pkgname %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
            '<%= globalConfig.destStyles %>/main.css': '<%= globalConfig.destStyles %>/main.prefixed.css'
        }
    }
};