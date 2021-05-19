const getDevServer = require('./parts/dev-server');
const getCleanPlugin = require('./plugins/eslint-plugin');

module.exports = {
  mode: 'development',
  plugins: [getCleanPlugin()],
  devServer: getDevServer(),
};
