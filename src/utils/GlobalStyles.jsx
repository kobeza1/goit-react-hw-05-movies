import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
        color: gray;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
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
      h2 {
        margin-bottom: 20px;
      }
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    

      a {
        color: gray;

        &:visited {
          color: gray;
        }
        text-decoration: none;
      }

      button {
        height: 38px;
        padding: 0 16px;
        border: 1px solid;
        background-color: #d22566;
        color: white;
        font-weight: 600;
        cursor: pointer;
        font-size: 16px;

      }

      section {
        margin-top: 20px;
      }

      `;
