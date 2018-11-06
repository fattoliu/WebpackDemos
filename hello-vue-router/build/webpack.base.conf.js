'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  // __dirname 表示被執行js所在資料夾位置
  // .. 表示上一層
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    // 表示打包完成的档案放置位置(预设为dist 资料夹)
    path: config.build.assetsRoot,
    // 中的[name] 会依据entry 属性名称变动；可以使用[chunkhash] 根据内容hash 作为档名，随着内容变动而变动，避免过板时旧档被快取而产生问题
    filename: '[name].js',
    // 表示设定所有assets 的base path， 多用于取得CDN 相关资源情境
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    //自动解析副档名，设定后可用 require('boo') 表示require('boo.vue')
    extensions: ['.js', '.vue', '.json'],
    //建立别名， 设定后可用 require('components/boo.js') 取代相对路径require('../../components/boo.js')
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [{
        // 设置档案描述(ex. 副档名为js / vue 的档案)
        test: /\.vue$/,
        // 使用哪个loader 套件进行处理
        loader: 'vue-loader',
        // 可选择pre 来进行前处理(ex. 透过eslint 先检查代码有无错误)
        enforce: true,
        // 其他设置项目
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 限制特定资料夹中的档案(缩小范围、提升转换效率)
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
