const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');

/**
 * Returns a flow for process less, css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset() {
  const loaders = [];
  loaders.push(MiniCssExtractPlugin.loader);
  loaders.push(...getCssLoader());

  return {
    test: /\.(less|css)$/,
    use: loaders,
  };
}

module.exports = getCssPreset;
