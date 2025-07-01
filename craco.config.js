/** @type {import('@craco/types').CracoConfig} */
module.exports = {
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
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
    },
  },
};
