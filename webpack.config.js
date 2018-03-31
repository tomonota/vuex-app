const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      'app': './src/app.js',
      'counter': './src/counter.js',
      'form': './src/form.js'
    },
    output: {
      path: __dirname + "/build",
      filename: '[name].build.js'
    },
    /*Use standalone vue.js instead of runtime vue.js.*/
    resolve: {
      alias: {
          'vue$': 'vue/dist/vue.common.js'
      }
    },
    module: {
      loaders: [
        { test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
          loader: "babel-loader",
          query:{
            presets: ['es2015']
          }
        }
      ]
    }
  },
  {
    entry: {
      'form': './src/scss/form.scss'
    },
    output: {
      path: __dirname + "/build",
      filename: '[name].css'
    },
    module: {
      rules: [
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader?indentedSyntax']
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin('[name].css'),
      ]
  }
]
