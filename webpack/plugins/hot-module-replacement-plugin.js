const webpack = require('webpack');

/**
 * @description A HotModuleReplacement plugin for webpack
 * @memberOf module:Plugins
 * @return {webpack.HotModuleReplacementPlugin}
 */
function getHotModuleReplacementPlugin() {
  return new webpack.HotModuleReplacementPlugin();
}

module.exports = getHotModuleReplacementPlugin;
