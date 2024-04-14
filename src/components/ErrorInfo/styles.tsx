import styled from '@emotion/styled'
import { flexbox } from '../../styles/utils/flexbox'
import { theme } from '../../styles'

export const StyledErrorMessage = styled.small`
  ${flexbox('end')}
  color: ${theme.colors.red};

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`
