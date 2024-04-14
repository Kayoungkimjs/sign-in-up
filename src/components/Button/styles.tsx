import styled from '@emotion/styled'
import { theme } from '../../styles'
import { textStyle } from '../../styles/utils/typography'
import { inlineFlexbox } from '../../styles/utils/flexbox'
import { media } from '../../styles/utils/media'

export const StyledButton = styled.button`
  ${inlineFlexbox()};
  ${media[0] ? textStyle('xs') : textStyle('md')}
  height: 25px;
  padding: 0 16px;
  font-weight: 700;
  border-radius: 4px;
  color: ${theme.colors.black};
  background-color: ${theme.colors.tertiary};
  transition: background-color 200ms ease-in-out;
  white-space: nowrap;

  &:not(:disabled):hover {
    background-color: ${theme.colors.secondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`
