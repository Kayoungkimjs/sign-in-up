import styled from '@emotion/styled'
import { textStyle } from '../../styles/utils/typography'
import { theme } from '../../styles'

export const StyledInput = styled.input`
  ${textStyle('sm')};
  display: block;
  width: 200px;
  padding: 0 8px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  color: ${theme.colors.black};
  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;
  appearance: none;

  &::placeholder {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.tertiary};
  }

  &:focus {
    border: 2px solid ${theme.colors.blueDark};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`
