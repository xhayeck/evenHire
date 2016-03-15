// Karma configuration
// Generated on Sat Mar 05 2016 14:07:29 GMT-0800 (PST)

module.exports = function (config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-material/angular-material.js',
        'node_modules/angular-aria/angular-aria.js',
        'client/app.js',
        'client/components/**/*.js',
        'tests/**/*.js',
      ],


    // list of files to exclude
      exclude: [
        'karma.config.js'
      ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
      },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress', 'kjhtml'],


    // web server port
      port: 9876,


    // enable / disable colors in the output (reporters and logs)
      colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      client: {
        jasmine: {
            reporter: 'html',
            ui: 'bdd'
          }
        },

    // client: {
    //      mocha: {
    //          reporter: 'html',
    //          ui: 'bdd'
    //      }
    //  },


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    captureTimeout: 20000,

    reportsSlowerThan: 500,

    // start these browsers, set up chrome for travis
    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    plugins: [
        'karma-coverage',
        'karma-jasmine',
        'karma-jasmine-html-reporter',
        'karma-chrome-launcher'
    ]
  };
    if (process.env.TRAVIS) {
        configuration.browsers = ['Chrome_travis_ci'];
    }

    config.set(configuration);
};

