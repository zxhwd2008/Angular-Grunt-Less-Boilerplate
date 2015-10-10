# AngularJS-Boilerplate
Simple AngularJS Boilerplate to kick start your new project with LESS support and Grunt watch/build tasks

# Features
* clear folder structure
* Integrate with Bootstrap
* Integrate with JSHint
* Less support
* Automatically compile less files
* Grunt build tasks including concat, minify, uglify CSS and JS files

## 1. Setup
```sh
$ git clone https://github.com/zxhwd2008/Angular-Boilerplate.git
$ cd Angular-Boilerplate
$ npm install
$ bower install
```

Finally, open `file:///path/to/angular-boilerplate/src/index.html` in your browser.

## 2. Watch Less files
```bash
grunt compileLess
```
Compile your Less files automatically

## 3. Build production version
```bash
grunt build
```

this will process following tasks:
* clean build folder
* run JSHint
* adds and removes AngularJS dependency injection annotations
* compile Less files
* parse CSS and add vendor prefixes to CSS rules
* minify all CSS files
* concat and minify all JS files
* build index.html

