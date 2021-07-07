const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

/**
 * @description Returns a plugin, which process images
 * @memberOf module:Plugins
 * @return {ImageMinimizerPlugin}
 * @see https://webpack.js.org/plugins/image-minimizer-webpack-plugin/
 */
function getImagminPlugin() {
  return new ImageMinimizerPlugin({
    minimizerOptions: {
      plugins: [
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 5 }],
        [
          'svgo',
          {
            plugins: extendDefaultPlugins([
              {
                name: "removeViewBox",
                active: true,
              },
              {
                name: "addAttributesToSVGElement",
                params: {
                  attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                },
              },
            ]),
          },
        ],
      ],
    },
  });
}

module.exports = getImagminPlugin;
