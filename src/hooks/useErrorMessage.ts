import {
  validateContact,
  validateEmail,
  validateName,
  validatePassword,
} from '../utils/validation'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userInfoState } from '../recoil/atoms/userInfoState'
import { errorState } from '../recoil/atoms/errorState'
import { ErrorMessage } from '../types/errorMessage'

const useErrorMessage = () => {
  const [errorInfo, setErrorInfo] = useRecoilState(errorState)
  const userInfo = useRecoilValue<ErrorMessage>(userInfoState)

  const validateInput = (name: string, value: string) => {
    let errorMessage: ErrorMessage = { ...errorInfo }

    switch (name) {
      case 'email':
        errorMessage = {
          ...errorMessage,
          email: !validateEmail(value) ? '유효한 이메일 형식이 아닙니다.' : '',
        }
        break
      case 'password':
        errorMessage = {
          ...errorMessage,
          password: !validatePassword(value)
            ? '유효한 패스워드 형식이 아닙니다. (영문 대소문자,숫자,특수문자(!@#$%^&*)를 포함한 8자리 이상)'
            : '',
        }
        break
      case 'confirmPassword':
        errorMessage = {
          ...errorMessage,
          confirmPassword:
            userInfo.password !== value
              ? '유효한 패스워드 확인 형식이 아닙니다.'
              : '',
        }
        break
      case 'name':
        errorMessage = {
          ...errorMessage,
          name: !validateName(value)
            ? '유효한 이름 형식이 아닙니다. (2글자 이상의 한글 혹은 3글자 이상의 알파벳)'
            : '',
        }
        break
      case 'contact':
        errorMessage = {
          ...errorMessage,
          contact: !validateContact(value)
            ? '유효한 연락처 형식이 아닙니다.'
            : '',
        }
        break
      default:
        break
    }

    setErrorInfo(errorMessage)
  }

  return { errorInfo, validateInput }
}

export default useErrorMessage
