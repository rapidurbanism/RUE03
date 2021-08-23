const CracoAlias = require("craco-alias");
const CracoLessPlugin = require("craco-less");
const CracoForkTSCheckerPlugin = require("./craco-fork-ts-checker-plugin");

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: require("./customized-theme"),
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
    {
      plugin: CracoForkTSCheckerPlugin,
      options: {
        memoryLimit: 8192, // set memory usage in MB, 8GB
      },
    },
  ],
};
