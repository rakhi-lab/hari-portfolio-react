import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: var(--font-sans, BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif);
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;
