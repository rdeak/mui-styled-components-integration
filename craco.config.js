const path = require("path");

/** @type {import('@craco/types').CracoConfig} */
module.exports = {
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
    configure: (webpackConfig) => {
      // Set up baseUrl resolution for webpack
      webpackConfig.resolve.modules = [
        path.resolve(__dirname, "src"),
        "node_modules",
      ];
      return webpackConfig;
    },
  },
  style: {
    sass: {
      loaderOptions: {
        sourceMap: true,
      },
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@mui/styled-engine$": "<rootDir>/node_modules/@mui/styled-engine-sc",
      },
      modulePaths: ["<rootDir>/src"],
    },
  },
};
