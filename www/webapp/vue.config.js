/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  configureWebpack: {
    devServer: {
      allowedHosts: 'all',
    },
  },
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .set('parser', {
        dataUrlCondition: {
          maxSize: 0 // Disable inline font to improve FCP (first contentful paint).
        }
      });
  },
  devServer:{
      port: 8080,
      proxy: {
        '/api': {
          target: "https://desec.io",
          changeOrigin: true,
          secure: true,
          // rewrite: path => path.replace('/api', ''),
        }
      }
  },
};
