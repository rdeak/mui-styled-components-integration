# Material UI with styled-components and SASS

> ⚠️ **Warning**: Using styled-components with Material-UI is not recommended for new projects as this approach is
> deprecated. This example is intended for legacy projects that need to maintain styled-components integration.
> For new projects, it's recommended to use Material-UI's default emotion-based styling engine.


This project demonstrates how to integrate Material-UI version 5 with styled-components in a React 18 application. 
By default, Material-UI v5 uses emotion as its styling engine, but this setup shows how to configure it to work seamlessly with styled-components instead.

### How It Works

The integration between Material-UI and styled-components is achieved through the `@mui/styled-engine-sc` package, which
acts as a bridge between the two libraries. Here's how it works:

The `craco.config.js` file is crucial for configuring webpack to use styled-components with Material-UI. It includes the
following key configurations:

1. Webpack aliases that replace the default Material-UI styling engine (emotion) with styled-components
2. Enable SASS in project
3. Override of the Material-UI styled-engine package to use `@mui/styled-engine-sc`
4. Override Jest configuration nam map style engine to `@mui/styled-engine-sc` in tests 

This configuration is necessary because Create React App doesn't allow direct webpack modifications without ejecting.
CRACO (Create React App Configuration Override) provides a way to customize the webpack configuration while keeping the
benefits of Create React App.

### Alternative setups

| Branch     | Description                       |
|------------|-----------------------------------|
| `base-url` | Example with tsconfig paths setup |
