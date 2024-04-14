import { SignupContainer, SignupDetail } from './Signup.styles'
import { useRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import useErrorMessage from '../../hooks/useErrorMessage'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ErrorMessage } from '../../components/ErrorInfo'

interface Props {
  onNextPage: () => void
}

const SignupStep1 = ({ onNextPage }: Props) => {
  const { errorInfo, validateInput } = useErrorMessage()
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    validateInput(name, value)
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (errorInfo.email || errorInfo.password || errorInfo.confirmPassword) {
      return
    }
    onNextPage()
  }

  return (
    <SignupContainer>
      <h1>1. 개인 정보 입력</h1>
      <SignupDetail>
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label htmlFor="email">이메일</label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={userInfo.email}
            />
          </div>
          {errorInfo.email && <ErrorMessage error={errorInfo.email} />}
          <div className="formItem">
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={userInfo.password}
            />
          </div>
          {errorInfo.password && <ErrorMessage error={errorInfo.password} />}
          <div className="formItem">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userInfo.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {errorInfo.confirmPassword && (
            <ErrorMessage error={errorInfo.confirmPassword} />
          )}
          <div className="nextButton">
            <Button
              type="submit"
              disabled={
                !!Object.values(errorInfo).find((error) => !!error) ||
                !userInfo.email ||
                !userInfo.password ||
                !userInfo.confirmPassword
              }
              children={'다음'}
              onClick={() => {
                handleSubmit
              }}
            />
          </div>
        </form>
      </SignupDetail>
    </SignupContainer>
  )
}

export default SignupStep1
