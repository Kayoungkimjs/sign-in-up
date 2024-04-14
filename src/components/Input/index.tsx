import { ChangeEvent, ReactNode } from 'react'
import { StyledInput } from './styles'

interface InputProps {
  type?: string
  value: string
  children?: ReactNode
  className?: string
  disabled?: boolean
  id?: string
  name?: string
  placeholder?: string
  required?: boolean
  readOnly?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  type = 'text',
  required = true,
  value,
  children,
  className,
  disabled,
  id,
  name,
  placeholder,
  readOnly,
  onChange,
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      className={className}
      disabled={disabled}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      onChange={onChange}
    >
      {children}
    </StyledInput>
  )
}
