"use client";

import { useAuthContextHook } from '@/context/use-auth-context'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'
import dynamic from 'next/dynamic'
import { Spinner } from '@/components/ui/loader/spinner';

//the below ensures we only load it when needed - i.e helps performance.
const DetailForm = dynamic(() => import('./account-details'), {
    ssr: false,
    loading: Spinner,
  })

type Props = {}

const RegistrationFormStep = (props: Props) => {
    const {
        register,
        formState: { errors }, 
        setValue
    } = useFormContext()
    const { currentStep } = useAuthContextHook();
    const [onOtp, setOnOtp] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'personal'>('owner')
    setValue('otp', onOtp)

    switch(currentStep){
        case 1:
            return(
                <TypeSelectionForm
                    register={register}
                    userType={onUserType}
                    setUserType={setOnUserType}
                />
            )
        case 2:
            return(
                <DetailForm errors={errors} register={register}/>
            )
        case 3:
            return(
                <OTPForm onOtp={onOtp} setOnOtp={setOnOtp}/>
            )
    }
  return (
    <div>RegistrationFormStep</div>
  )
}

export default RegistrationFormStep