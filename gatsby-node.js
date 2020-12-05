const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        helpers: path.resolve(__dirname, "src/helpers"),
        locales: path.resolve(__dirname, "src/locales"),
        styles: path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
