const path = require('path')

module.exports = {
  publicPath: './',
  // 新版 Vue CLI 支持使用 vue.config.js 中的 pages 选项构建一个多页面的应用。这里使用 pages 修改入口到 examples
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  // packages 是我们新增的一个目录，默认是不被 webpack 处理的，所以需要添加配置对该目录的支持。
  // chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。

  // 扩展 webpack 配置，使packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改他的选项
        return options
      })
  },

  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },

  configureWebpack: () => {
    const config = {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'examples'),
          packages: path.resolve(__dirname, 'packages')
        }
      }
    }
    return config
  }
}