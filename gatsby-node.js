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

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type News implements Node {
//       title_pl: String
//       title_en: String
//       description_pl: String
//       description_en: String
//       date: Date
//     }
//   `
//   createTypes(typeDefs)
// }
