module.exports = {
  devServer: {
    proxy: {  // 跨域代理配置
      '/api': {
        target: 'http://localhost:7001/',  //跨域访问的接口地址
        changeOrigin: true,
      }
    }
  }
}