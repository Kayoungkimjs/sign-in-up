import { atom } from 'recoil'

export const errorState = atom({
  key: 'errorState',
  default: {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    contact: '',
  },
})

export const cardErrorState = atom({
  key: 'cardErrorState',
  default: {
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
  },
})
