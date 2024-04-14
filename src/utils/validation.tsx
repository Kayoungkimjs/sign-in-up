export const validateEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
}

export const validatePassword = (password: string): boolean => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
    password
  )
}

export const validateName = (name: string): boolean => {
  return /^[가-힣]{2,}$|^[a-zA-Z]{3,}$/.test(name)
}

export const validateContact = (contact: string): boolean => {
  return /^0\d{2}[ -]?\d{3,4}[ -]?\d{4}$/.test(contact)
}

export const validateInputNumber = (card: string): boolean => {
  return /^\d{4}$/.test(card)
}

export const validateCardNumber = (...cardNumbers: string[]): boolean => {
  const fullCardNumber = cardNumbers.join('')
  const isValidLength = /^\d{16}$/.test(fullCardNumber)

  if (!isValidLength) return false

  let sum = 0
  let double = false

  for (let i = fullCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(fullCardNumber.charAt(i), 10)

    if (double) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
    double = !double
  }

  return sum % 10 === 0
}
