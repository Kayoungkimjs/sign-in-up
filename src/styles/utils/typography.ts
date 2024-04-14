import { css, TypographyScale } from '@emotion/react'

import { theme } from '../index'

export function textStyle(size: TypographyScale) {
  return css`
    font-size: ${theme.fontSizes[size]};
    line-height: ${theme.lineHeights[size]};
    letter-spacing: ${theme.letterSpacings[size]};
  `
}
