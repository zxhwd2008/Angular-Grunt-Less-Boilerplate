module.exports = {
    timestamp: Date.now(),
    buildNumber: Date.now().toString(),
    buildDate: (new Date()).toLocaleString(),
    pkgname: 'AngularBoilerplate',
    lib: 'src/lib',
    src: 'src/app',
    common: 'src/app/common',
    dest: 'build',
    style: 'src/styles',
    destApp: 'Build/app'
};