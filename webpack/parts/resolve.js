const path = require('path');

/**
 * @description This is a part of config says how modules resolves.
 * First part of aliases is project aliases. Second one - is for package resolving.
 * @memberOf module:Parts
 * @return {Part}
 */
function getResolve() {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, '../../src/assets'),
      components: path.resolve(__dirname, '../../src/components'),
      pages: path.resolve(__dirname, '../../src/pages'),
      store: path.resolve(__dirname, '../../src/store'),
      utils: path.resolve(__dirname, '../../src/utils'),
      hocs: path.resolve(__dirname, '../../src/hocs'),
      layouts: path.resolve(__dirname, '../../src/layouts'),
    },
  };
}

module.exports = getResolve;
