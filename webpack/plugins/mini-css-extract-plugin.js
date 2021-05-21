const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

/**
 * @description Returns a plugin, which extracts common css from chunks in separate chunk.
 * @memberOf module:Plugins
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 * @return {MiniCssExtractPlugin}
 */
function getMiniCssExtractPlugin() {
  return new MiniCssExtractPlugin({
    filename: isProd ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: isProd ? '[id].css' : '[id].[contenthash].css',
  });
}

module.exports = getMiniCssExtractPlugin;
