
module.exports = {
  publicPath: './' // 解决打包上线时，文件路径变为绝对路径，显示空白
  // configureWebpack: { // 对webpack配置
  //   devServer: {
  //     proxy: { // 跨域代理
  //       '/api': {
  //         target: 'http://ko.196.152.com', // baseURL
  //         changeOrigin: true, // 是否开启跨域
  //         pathRewrite: {
  //           '^/api': '' // 让路径以/api开头的字段为空
  //         }
  //       }
  //     }
  //   }
  // },
}
