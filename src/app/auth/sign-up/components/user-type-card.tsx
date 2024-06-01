"use client"

import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    value: string
    title: string
    text: string
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'personal'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'personal'>>
}

const UserTypeCard = ({
    value,
    title,
    text,
    register,
    userType,
    setUserType
}: Props) => {
  return (
    <Label htmlFor={value}>
        <Card
            className={cn(
                'w-full cursor-pointer',
                userType == value && 'border-secondaryBlue'
            )}
        >
            <CardContent className='flex justify-between p-2'>
                <div className='flex items-center gap-3'>
                    <Card
                        className={cn(
                            'flex justify-center -p-3',
                            userType == value && 'border-secondaryBlue'
                        )}
                    >
                        <User
                            size={30}
                            className={cn(
                                userType == value ? 'text-secondaryBlue' : 'text-gray-400'
                            )}
                        />
                    </Card>
                    <div className=''>
                        <CardDescription
                            className={cn(
                                userType == value ? 'text-secondaryBlue' : 'text-gray-400'
                            )}
                        >
                            {title}
                        </CardDescription>
                        <CardDescription className='font-light'>{text}</CardDescription>
                    </div>
                </div>
                <div>
                    <div className={cn(
                        'w-4 h-4 rounded-full',
                        userType == value ? 'bg-primaryBlue' : 'bg-platinum'
                    )}>
                        <Input
                            {...register('type', {
                                onChange: (event) => setUserType(event.target.value)
                            })}
                            value={value}
                            id={value}
                            className='hidden'
                            type='radio'
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    </Label>
  )
}

export default UserTypeCard