import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${p => p.theme.colors.primaryColor};
  color: white;
}

img {
  display: block;
  max-width: 100%;
  height: auto;

  object-fit: cover;
  object-position: center;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
`;
