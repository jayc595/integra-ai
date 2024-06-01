import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'

type Props = {
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'personal'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'personal'>>
}

const TypeSelectionForm = ({ 
    register, 
    userType, 
    setUserType
}: Props) => {
  return (
    <>
        <h2 className='text-gravel md:text-4xl font-bold'>Create an account</h2>
        <p className='text-iridium md:text-sm'>Tell us about yourself! What do you do? We want to tailor your 
            <br/>experience so it suits you best.
        </p>
        <UserTypeCard
            register={register}
            setUserType={setUserType}
            userType={userType}
            value="owner"
            title="Business Owner"
            text="Setting up an account to use for my organization"
        />
        <UserTypeCard
            register={register}
            setUserType={setUserType}
            userType={userType}
            value="personal"
            title="Personal"
            text="Setting up an account to use for testing"
        />
    </>
  )
}

export default TypeSelectionForm