# AngularJS-Boilerplate
Simple AngularJS Boilerplate to kick start your new project with LESS support and Grunt watch/build tasks

# Features
* Clear folder structure
* Integrate with Bootstrap
* Integrate with JsHint
* Less support
* Automatically compile less files
* Separate concerns of Grunt tasks
* Grunt build tasks including concat, minify, uglify CSS and JS files
* Live reload
* Automatically checks JsHint

## 1. Setup
```sh
$ git clone https://github.com/zxhwd2008/Angular-Boilerplate.git
$ cd Angular-Boilerplate
$ npm install
$ bower install
```

Finally, open `file:///path/to/angular-boilerplate/src/index.html` in your browser.

## 2. Run local server
```bash
grunt server
```
Compile your Less files, check JsHint and live reload automatically

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
