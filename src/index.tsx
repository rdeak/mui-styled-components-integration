import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { ThemeProvider as ThemeProviderMUI } from "@mui/material/styles";
import { App } from "./app";
import { theme } from "./theme";
import { StrictMode } from "react";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ThemeProviderMUI theme={theme}>
      <ThemeProviderSC theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProviderSC>
    </ThemeProviderMUI>
  </StrictMode>,
);
