var path = require('path')

module.exports = [
  {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'library', 'parser.js'),
    output: {
      path: path.join(__dirname, 'lib'),
      filename: 'index.js',
      library: 'apng-js',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        }
      ]
    }
  },
  {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'demo-page', 'index.js'),
    output: {
      path: path.join(__dirname, 'docs'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          exclude: /[\\\/](node_modules|lib)[\\\/]/,
          use: ['style-loader','css-loader']
        }
      ]
    }/*,
     plugins: [
     new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false,
     screw_ie8: true
     },
     comments: false
     })
     ] */
  }
]
