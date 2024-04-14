import { Button } from '../../components/Button'
import { SignupContainer, SignupDetail } from './Signup.styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import { validateInputNumber, validateCardNumber } from '../../utils/validation'
import { useState } from 'react'
import { cardErrorState } from '../../recoil/atoms/errorState'
import { Input } from '../../components/Input'
import { ErrorMessage } from '../../components/ErrorInfo'

interface Props {
  onNextPage: () => void
  onPrevPage: () => void
}

const SignupStep3 = ({ onNextPage, onPrevPage }: Props) => {
  const cardError = useRecoilValue(cardErrorState)
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (!validateInputNumber(value)) {
      setErrorMessage('4자리의 숫자만 입력해주세요.')
    } else {
      setErrorMessage('')
    }

    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isCardNumberValid = validateCardNumber(
      userInfo.cardNumber1,
      userInfo.cardNumber2,
      userInfo.cardNumber3,
      userInfo.cardNumber4
    )

    if (!isCardNumberValid) {
      setErrorMessage('유효한 카드 번호가 아닙니다.')
      return
    }

    if (
      cardError.cardNumber1 ||
      cardError.cardNumber2 ||
      cardError.cardNumber3 ||
      cardError.cardNumber4
    ) {
      return
    }

    onNextPage()
  }

  return (
    <SignupContainer>
      <h3>3. 결제 정보 입력</h3>
      <SignupDetail>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cardNumber">카드번호</label>
          <div className="cardNumberGroup">
            <Input
              name="cardNumber1"
              onChange={handleChange}
              value={userInfo.cardNumber1}
            />
            <Input
              name="cardNumber2"
              onChange={handleChange}
              value={userInfo.cardNumber2}
            />
            <Input
              name="cardNumber3"
              onChange={handleChange}
              value={userInfo.cardNumber3}
            />
            <Input
              name="cardNumber4"
              onChange={handleChange}
              value={userInfo.cardNumber4}
            />
          </div>
          {cardError && <ErrorMessage error={errorMessage} />}
          <ul className="testNumber">
            <strong>* 유효한 카드번호 (테스트)</strong>
            <li>3569-9900-1003-0400</li>
            <li>3210-9876-5432-1098</li>
            <li>5432-2468-9753-2146</li>
            <li>6011-2233-4455-6677</li>
          </ul>
          <div className="buttonGroup">
            <Button onClick={onPrevPage} children={'이전'} />
            <Button
              type={'submit'}
              disabled={
                !!Object.values(cardError).find((error) => !!error) ||
                !userInfo.cardNumber1 ||
                !userInfo.cardNumber2 ||
                !userInfo.cardNumber3 ||
                !userInfo.cardNumber4 ||
                !!errorMessage
              }
              onClick={() => {
                handleSubmit
              }}
              children={'다음'}
            />
          </div>
        </form>
      </SignupDetail>
    </SignupContainer>
  )
}

export default SignupStep3
