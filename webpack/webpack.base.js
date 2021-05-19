const entryOutput = require('./parts/entry-output');

const getTypeScriptPreset = require('./presets/ts-preset');
const getCssPreset = require('./presets/css-preset');
const getFilePreset = require('./presets/file-preset');
const getSVGPreset = require('./presets/svg-preset');

const getBasePlugins = require('./parts/plugins');
const getResolve = require('./parts/resolve');

const analyzeMode = !!process.env.analyze;

module.exports = {
  ...entryOutput(),
  devtool: 'cheap-module-source-map',
  module: {
    rules: [getTypeScriptPreset(), getCssPreset(), getFilePreset(), getSVGPreset()],
  },
  plugins: getBasePlugins(analyzeMode),
  optimization: {
    runtimeChunk: true,
  },
  resolve: getResolve(),
};
