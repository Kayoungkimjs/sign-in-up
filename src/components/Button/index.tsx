import { ReactNode } from 'react'
import { StyledButton } from './styles'

interface ButtonProps {
  children?: ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export const Button = ({
  children,
  className,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  )
}
