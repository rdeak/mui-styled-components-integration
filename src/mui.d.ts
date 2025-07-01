import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    patterns: {
      checker: string;
      polka: string;
      wave: string;
    };
  }
  interface ThemeOptions {
    patterns?: {
      checker?: string;
      polka?: string;
      wave?: string;
    };
  }
}
