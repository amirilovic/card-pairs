var path = require('path');

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path:       path.resolve(__dirname, 'build'),
    publicPath: '/dist/',
    filename:   'bundle.js'
  },
  module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test:    /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader:  'babel',
                query:   {
                    presets: ['es2015']
                }
            }, {
                test:   /\.html$/,
                loader: 'raw'
            },
            {
                test:   /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};