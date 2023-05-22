const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', '..', 'app/javascript'),
      '@script': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@stylesheets': path.resolve(__dirname, '..', '..', 'app/javascript/stylesheets'),
      '@images': path.resolve(__dirname, '..', '..', 'app/javascript/images'),
      '@fonts': path.resolve(__dirname, '..', '..', 'app/javascript/fonts'),
    }
  }
}
