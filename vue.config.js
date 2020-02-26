// vue.config.js
const path = require('path');
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, 'src/')
      }
    }
  }
}