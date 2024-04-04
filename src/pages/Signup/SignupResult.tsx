import { useRecoilValue } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import { SignupContainer } from './Signup.styles'

function SignupResult() {
  const userInfo = useRecoilValue(userInfoState)
  return (
    <SignupContainer>
      <div className="result">
        <h2>회원가입이 완료되었습니다.</h2>
        <h3>"{userInfo.name}"님의 회원가입을 축하합니다!</h3>
        <div>
          <p>이메일: {userInfo.email}</p>
          <p>
            주소:{' '}
            {`(${userInfo.zonecode}) ${userInfo.address} ${userInfo.detailedAddress}`}
          </p>
          <p>연락처: {userInfo.contact}</p>
        </div>
      </div>
    </SignupContainer>
  )
}

export default SignupResult
