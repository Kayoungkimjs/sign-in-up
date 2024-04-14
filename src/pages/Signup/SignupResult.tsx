import { useRecoilValue } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import { SignupContainer } from './Signup.styles'

function SignupResult() {
  const userInfo = useRecoilValue(userInfoState)

  return (
    <SignupContainer>
      <div className="signupResult">
        <h3>회원가입이 완료되었습니다.</h3>
        <p>
          "<strong>{userInfo.name}</strong>"님의 회원가입을 축하합니다!
        </p>
        <dl className="signupResultDetail">
          <div>
            <dt>이메일</dt>
            <dd>
              <address>{userInfo.email}</address>
            </dd>
          </div>
          <div>
            <dt>주소</dt>
            <dd>
              <address>{`(${userInfo.zonecode}) ${userInfo.address} ${userInfo.detailedAddress}`}</address>
            </dd>
          </div>
          {userInfo.extraAddress && (
            <div>
              <dt>요청사항</dt>
              <dd>{userInfo.extraAddress}</dd>
            </div>
          )}
          <div>
            <dt>연락처</dt>
            <dd>{userInfo.contact}</dd>
          </div>
        </dl>
      </div>
    </SignupContainer>
  )
}

export default SignupResult
