"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: light;
    --background: #ebebeb;
    --foreground: #202020;
    --body: #282828;
    --muted: #727272;
    --line: #cecece;
    --page-x: 32px;
    --page-y: 40px;
  }
  *, *::before, *::after { box-sizing: border-box; border: 0 solid; }
  html { min-height: 100%; -webkit-text-size-adjust: 100%; tab-size: 4; }
  body {
    margin: 0;
    padding: var(--page-y) var(--page-x);
    background: var(--background);
    color: var(--body);
    font-family: var(--font-noto-serif), "Batang", serif;
    font-size: 14px;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6 { margin: 0; font-size: inherit; font-weight: inherit; }
  p, dl, dd { margin: 0; }
  ol, ul { list-style: none; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: none; text-underline-offset: 3px; }
  a:hover { text-decoration: underline; }
  a:focus-visible { outline: 1px solid currentColor; outline-offset: 4px; }
  strong, b { font-weight: bolder; }
  button, input, textarea, select { font: inherit; color: inherit; }
  @media (max-width: 899px) {
    :root { --page-x: 24px; --page-y: 28px; }
  }
  @media (max-width: 539px) {
    :root { --page-x: 20px; --page-y: 24px; }
  }
`;
