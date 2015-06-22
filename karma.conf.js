// Karma configuration
// Generated on Mon Jun 08 2015 11:54:05 GMT-0300 (E. South America Standard Time)

module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '../ContaAzul/contaazul-static/src/main/webapp/js/**/*.html',
      '../ContaAzul/contaazul-static/src/main/webapp/js/*Module.js',
      'spec/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-coverage'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '../ContaAzul/contaazul-static/src/main/webapp/js/**/*Template.html': 'ng-html2js',
        '../ContaAzul/contaazul-static/src/main/webapp/js/*Module.js': 'coverage'
    },


    ngHtml2JsPreprocessor: {
      // If your build process changes the path to your templates,
      // use stripPrefix and prependPrefix to adjust it.
      //stripPrefix: '',
      //prependPrefix: '',

      moduleName: 'templates'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    coverageReporter: {
        dir : 'coverage/',
        reporters: [
            { type : 'html', subdir: 'report-html' },
            { type: 'text', subdir: '.' }
        ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
      //'Chrome'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
