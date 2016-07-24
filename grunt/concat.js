module.exports = {
    // Outputs the libs.js file (common fol all pages)
    // All these libraries are supplied by vendors
    libs: {
        src: [
            '<%= project.lib %>/jquery/dist/jquery.js',
            '<%= project.lib %>/bootstrap/dist/js/bootstrap.js',
            '<%= project.lib %>/angular/angular.js',
            '<%= project.lib %>/angular-ui-router/release/angular-ui-router.js',
            '<%= project.lib %>/angular-bootstrap/ui-bootstrap-tpls.js',
            '<%= project.lib %>/underscore/underscore.js'
        ],
        dest: '<%= project.dest %>/<%= project.pkgname %>.libs.js'
    },

    // The app
    app: {
        src: [
            '<%= project.app %>/app.js',
            '<%= project.app %>/**/*.js'
        ],
        dest: '<%= project.dest %>/<%= project.pkgname %>.app.js'
    }
};
