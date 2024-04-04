import { Button } from '../../components/Button'
import { SignupContainer, SignupDetail } from './Signup.styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import { validateCardNumber } from '../../utils/validation'
import { useState } from 'react'
import { cardErrorState } from '../../recoil/atoms/errorState'

interface Props {
  onNextPage: () => void
  onPrevPage: () => void
}

const SignupStep3 = ({ onNextPage, onPrevPage }: Props) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const cardError = useRecoilValue(cardErrorState)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // 카드 번호의 유효성을 검사
    const isValid = validateCardNumber(value)

    // 유효성에 따라 에러 메시지 설정
    setErrorMessage(isValid ? '' : '유효한 카드 번호가 아닙니다.')

    // 사용자 정보 업데이트
    setUserInfo(() => ({
      ...userInfo,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          <div className="card-number-group">
            <label htmlFor="cardNumber">카드번호</label>
            <input
              type="text"
              name="cardNumber1"
              onChange={handleChange}
              value={userInfo.cardNumber1}
              required
            />
            <input
              type="text"
              name="cardNumber2"
              onChange={handleChange}
              value={userInfo.cardNumber2}
              required
            />
            <input
              type="text"
              name="cardNumber3"
              onChange={handleChange}
              value={userInfo.cardNumber3}
              required
            />
            <input
              type="text"
              name="cardNumber4"
              onChange={handleChange}
              value={userInfo.cardNumber4}
              required
            />
          </div>
          <small className="warning">{errorMessage}</small>
          <div className="button-group">
            <Button onClick={onPrevPage} children={'이전'} />
            <Button
              type={'submit'}
              disabled={
                !!Object.values(cardError).find((error) => !!error) ||
                !userInfo.cardNumber1 ||
                !userInfo.cardNumber2 ||
                !userInfo.cardNumber3 ||
                !userInfo.cardNumber4
              }
              onClick={() => handleSubmit}
              children={'다음'}
            />
          </div>
        </form>
      </SignupDetail>
    </SignupContainer>
  )
}

export default SignupStep3
