var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      {pattern: 'src/**/*.spec.js', watched: false}
    ],

    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,

    browsers: ['Chrome'],

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      require('karma-webpack')
    ]
  });
};