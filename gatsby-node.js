const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@commons": path.resolve(__dirname, "src/commons"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  })
}
