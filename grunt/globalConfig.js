module.exports = {
    timestamp: Date.now(),
    buildNumber: Date.now().toString(),
    buildDate: (new Date()).toLocaleString(),
    pkgname: 'AngularBoilerplate',
    dev: 'src',
    lib: 'src/lib',
    src: 'src/app',
    common: 'src/app/common',
    style: 'src/styles',
    dest: 'build',
    destApp: 'build/src/app',
    destStyles: 'build/src/styles'
};
