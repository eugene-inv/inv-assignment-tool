var path = require('path')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.scss'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 100000,
          name: '[name].[ext]?[hash:7]'
        }
      },
        { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  vue: {
    loaders: {
        scss: 'style!css!sass'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
