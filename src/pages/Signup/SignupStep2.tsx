import { useState } from 'react'
import { Button } from '../../components/Button'
import { SignupContainer, SignupDetail } from './Signup.styles'
import DaumPostcode from 'react-daum-postcode'
import { useRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import useErrorMessage from '../../hooks/useErrorMessage'

interface Data {
  address: string
  zonecode: string
}

interface Props {
  onNextPage: () => void
  onPrevPage: () => void
}

const SignupStep2 = ({ onNextPage, onPrevPage }: Props) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  console.log('userInfo', userInfo)
  const { errorInfo, validateInput } = useErrorMessage()
  const [isOpen, setIsOpen] = useState(false)

  const closeHandler = (state: string) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false)
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false)
    }
  }

  const completeHandler = (data: Data) => {
    const { address, zonecode } = data
    setUserInfo({ ...userInfo, address, zonecode })
  }

  const toggleHandler = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    validateInput(name, value)

    // userInfo 업데이트
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (errorInfo.name || errorInfo.contact) {
      // 유효성 검사에 실패한 경우
      return
    }
    onNextPage()
  }

  return (
    <SignupContainer>
      <h3>2. 배송지 정보 입력</h3>
      <SignupDetail>
        <form onSubmit={handleSubmit}>
          <div className="detail">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={userInfo.name}
              required
            />
          </div>
          <small className="warning"> {errorInfo.name}</small>
          <div className="detail">
            <label htmlFor="contact">연락처</label>
            <input
              type="text"
              id="contact"
              name="contact"
              onChange={handleChange}
              value={userInfo.contact}
              required
            />
          </div>
          <small className="warning"> {errorInfo.contact}</small>
          <div className="detail">
            <label htmlFor="address">주소</label>
            <div className="zonecode">
              <input
                type="string"
                id="address"
                name="address"
                value={userInfo.zonecode}
                placeholder="우편번호"
                onChange={handleChange}
                required
                readOnly
              />
              <Button children="주소 찾기" onClick={toggleHandler} />
            </div>
          </div>
          <div className="address">
            <input
              type="string"
              id="address"
              name="address"
              value={userInfo.address}
              placeholder="주소"
              onChange={handleChange}
              required
              readOnly
            />
          </div>
          <div className="address-detail">
            <input
              type="string"
              id="detailedAddress"
              name="detailedAddress"
              placeholder="상세주소"
              value={userInfo.detailedAddress}
              onChange={handleChange}
            />
            <input
              type="string"
              id="extraAddress"
              name="extraAddress"
              placeholder="참고항목"
              value={userInfo.extraAddress}
              onChange={handleChange}
            />
          </div>
          {isOpen && (
            <div className="postcode">
              <DaumPostcode
                onComplete={completeHandler}
                onClose={closeHandler}
              />
            </div>
          )}
          <div className="button-group">
            <Button type="submit" onClick={onPrevPage} children={'이전'} />
            <Button
              type="submit"
              disabled={
                !!Object.values(errorInfo).find((error) => !!error) ||
                !userInfo.name ||
                !userInfo.contact ||
                !userInfo.address
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

export default SignupStep2
