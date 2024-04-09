import styled from '@emotion/styled'
import { theme } from '../../styles'
import { textStyle } from '../../styles/utils/typography'
import { inlineFlexbox } from '../../styles/utils/flexbox'

export const StyledButton = styled.button`
  ${inlineFlexbox()};
  ${textStyle('sm')};
  height: 25px;
  padding: 0 16px;
  font-weight: 700;
  border-radius: 4px;
  color: ${theme.colors.black};
  background-color: ${theme.colors.tertiary};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${theme.colors.secondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`
