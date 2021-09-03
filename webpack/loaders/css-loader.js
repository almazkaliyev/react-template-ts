/**
 * Returns a css-loader. It parses css
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/css-loader
 */
 function getCssLoader() {
  return ['css-loader', 'sass-loader'];
}

module.exports = getCssLoader;
