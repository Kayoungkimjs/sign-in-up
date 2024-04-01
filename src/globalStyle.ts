import { css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import { visuallyHidden } from './styles/utils/a11y'
import { theme } from './styles'

export const GlobalStyles = css`
  ${emotionNormalize}

  * {
    font-family: ${theme.fontFamilies.main};
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html {
    font-family: ${theme.fontFamilies.main};
    font-size: ${theme.fontSizes.base};
    letter-spacing: ${theme.letterSpacings.base};
  }

  body {
    font-family: ${theme.fontFamilies.main};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  .visuallyHidden {
    ${visuallyHidden()}
  }
`
