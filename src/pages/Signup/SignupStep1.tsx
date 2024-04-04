import { SignupContainer, SignupDetail } from './Signup.styles'
import { useRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import useErrorMessage from '../../hooks/useErrorMessage'
import { Button } from '../../components/Button'

interface Props {
  onNextPage: () => void
}

const SignupStep1 = ({ onNextPage }: Props) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const { errorInfo, validateInput } = useErrorMessage()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // 유효성 검사를 수행하여 에러 메시지 설정
    validateInput(name, value)
    // userInfo 업데이트
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (errorInfo.email || errorInfo.password || errorInfo.confirmPassword) {
      // 유효성 검사에 실패한 경우
      return
    }
    onNextPage()
  }

  return (
    <SignupContainer>
      <h3>1. 개인 정보 입력</h3>
      <SignupDetail>
        <form onSubmit={handleSubmit}>
          <div className="detail">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={userInfo.email}
              required
            />
          </div>
          <small className="warning"> {errorInfo.email}</small>
          <div className="detail">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={userInfo.password}
              required
            />
          </div>
          <small className="warning"> {errorInfo.password}</small>
          <div className="detail">
            <label htmlFor="confirm-password">비밀번호 확인</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={userInfo.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <small className="warning">{errorInfo.confirmPassword}</small>
          <div className="next-button">
            <Button
              type="submit"
              disabled={
                !!Object.values(errorInfo).find((error) => !!error) ||
                !userInfo.email ||
                !userInfo.password ||
                !userInfo.confirmPassword
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

export default SignupStep1
