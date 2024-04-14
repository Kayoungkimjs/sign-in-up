import { useState } from 'react'
import { Button } from '../../components/Button'
import { SignupContainer, SignupDetail } from './Signup.styles'
import DaumPostcode from 'react-daum-postcode'
import { useRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/atoms/userInfoState'
import useErrorMessage from '../../hooks/useErrorMessage'
import { Input } from '../../components/Input'
import { ErrorMessage } from '../../components/ErrorInfo'

interface AddressDataType {
  address: string
  zonecode: string
}

interface Props {
  onNextPage: () => void
  onPrevPage: () => void
}

const SignupStep2 = ({ onNextPage, onPrevPage }: Props) => {
  const { errorInfo, validateInput } = useErrorMessage()
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [isOpen, setIsOpen] = useState(false)

  const handleComplete = (data: AddressDataType) => {
    const { address, zonecode } = data
    setUserInfo({ ...userInfo, address, zonecode })
  }

  const toggleHandler = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    validateInput(name, value)
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (errorInfo.name || errorInfo.contact) {
      return
    }
    onNextPage()
  }

  return (
    <SignupContainer>
      <h1>2. 배송지 정보 입력</h1>
      <SignupDetail>
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label htmlFor="name">이름</label>
            <Input
              id="name"
              name="name"
              onChange={handleChange}
              value={userInfo.name}
            />
          </div>
          {errorInfo.name && <ErrorMessage error={errorInfo.name} />}
          <div className="formItem">
            <label htmlFor="contact">연락처</label>
            <Input
              id="contact"
              name="contact"
              onChange={handleChange}
              value={userInfo.contact}
            />
          </div>
          {errorInfo.contact && <ErrorMessage error={errorInfo.contact} />}
          <div className="formItem">
            <label htmlFor="address">주소</label>
            <div className="zonecode">
              <Input
                id="address"
                name="address"
                value={userInfo.zonecode}
                placeholder="우편번호"
                onChange={handleChange}
                readOnly
              />
              <Button
                className="findButtton"
                children="검색"
                onClick={toggleHandler}
              />
            </div>
          </div>
          <div className="address">
            <Input
              id="address"
              name="address"
              value={userInfo.address}
              placeholder="주소"
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="addressDetail">
            <Input
              id="detailedAddress"
              name="detailedAddress"
              placeholder="상세주소"
              value={userInfo.detailedAddress}
              onChange={handleChange}
            />
            <Input
              id="extraAddress"
              name="extraAddress"
              placeholder="요청사항"
              value={userInfo.extraAddress}
              onChange={handleChange}
              required={false}
            />
          </div>
          {isOpen && (
            <div className="postcode">
              <DaumPostcode onComplete={handleComplete} />
            </div>
          )}
          <div className="buttonGroup">
            <Button type="submit" onClick={onPrevPage} children={'이전'} />
            <Button
              type="submit"
              disabled={
                !!Object.values(errorInfo).find((error) => !!error) ||
                !userInfo.name ||
                !userInfo.contact ||
                !userInfo.address
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

export default SignupStep2
