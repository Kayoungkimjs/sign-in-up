import { atom } from 'recoil'

export const errorState = atom({
  key: 'errorState',
  default: {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    contact: '',
    address: '',
    detailedAddress: '',
    zonecode: '',
    extraAddress: '',
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
    cardNumber: '',
  },
})
