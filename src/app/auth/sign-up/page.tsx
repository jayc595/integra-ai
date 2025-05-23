import React from 'react'
import SignUpFormProvider from './components/form-provider'
import RegistrationFormStep from './components/registration-step'
import StepHandler from './components/step-handler'
import StepIndicator from './components/step-indicator'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className='flex-1 py-36 md:px-16 w-full'>
        <div className='flex flex-col h-full gap-3'>
            <SignUpFormProvider>
              <div className='flex flex-col gap-3'>
                <RegistrationFormStep/>
                <StepHandler/>
              </div>
              <StepIndicator/>
            </SignUpFormProvider>
        </div>
    </div>
  )
}

export default SignUp