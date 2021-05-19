/**
 * @description Returns a config for development server
 * @memberOf module:Parts
 * @return {Part}
 */
function getDevServer() {
  return {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  };
}

module.exports = getDevServer;
