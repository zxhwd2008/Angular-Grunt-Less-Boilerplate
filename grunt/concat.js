module.exports = {
    // Outputs the libs.js file (common fol all pages)
    // All these libraries are supplied by vendors
    libs: {
        src: [
            '<%= globalConfig.lib %>/jquery/dist/jquery.js',
            '<%= globalConfig.lib %>/bootstrap/dist/js/bootstrap.js',
            '<%= globalConfig.lib %>/angular/angular.js',
            '<%= globalConfig.lib %>/angular-ui-router/release/angular-ui-router.js',
            '<%= globalConfig.lib %>/angular-bootstrap/ui-bootstrap-tpls.js',
            '<%= globalConfig.lib %>/underscore/underscore.js'
        ],
        dest: '<%= globalConfig.dest %>/<%= globalConfig.pkgname %>.libs.js'
    },

    // The app
    app: {
        src: [
            '<%= globalConfig.src %>/app.js',
            '<%= globalConfig.src %>/**/*.js'
        ],
        dest: '<%= globalConfig.dest %>/<%= globalConfig.pkgname %>.app.js'
    }
};