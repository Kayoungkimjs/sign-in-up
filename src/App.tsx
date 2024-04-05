import { useRecoilState } from 'recoil'
import { stepState } from './recoil/atoms/stepState'
import SignupStep1 from './pages/Signup/SignupStep1'
import SignupStep2 from './pages/Signup/SignupStep2'
import SignupStep3 from './pages/Signup/SignupStep3'
import SignupResult from './pages/Signup/SignupResult'

const App = () => {
  const [step, setStep] = useRecoilState(stepState)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrev = () => {
    setStep(step - 1)
  }

  return (
    <>
      {step === 1 && <SignupStep1 onNextPage={handleNext} />}
      {step === 2 && (
        <SignupStep2 onNextPage={handleNext} onPrevPage={handlePrev} />
      )}
      {step === 3 && (
        <SignupStep3 onNextPage={handleNext} onPrevPage={handlePrev} />
      )}
      {step === 4 && <SignupResult />}
    </>
  )
}

export default App
