import { StyledErrorMessage } from './styles'

interface Props {
  error: string
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
  return <StyledErrorMessage className="warning">{error}</StyledErrorMessage>
}
