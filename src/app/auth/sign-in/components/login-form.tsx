'use client'
import React from 'react'
import { useFormContext } from 'react-hook-form'


import FormGenerator from '../../components/form-generator'
import { USER_LOGIN_FORM } from '@/constants/forms'

type Props = {}

const LoginForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Login</h2>
      <p className="text-iridium md:text-sm">
        Enter your existing email and password below
      </p>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  )
}

export default LoginForm