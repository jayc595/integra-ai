import { InputOTP, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { OTPInput } from 'input-otp'
import Link from 'next/link'
import React from 'react'

type Props = {
    setOtp: React.Dispatch<React.SetStateAction<string>>
    onOtp: string
}

const OtpForm = ({
    setOtp,
    onOtp
}: Props) => {
    return (
        <>
            <h2 className='text-gravel md:text-4xl font-bold'>Enter OTP</h2>
            <p className='text-iridium md:text-sm'>We sent you a one time password to confirm your email address, enter it below to finish registering your account.</p>
            <div className='w-full justify-center flex py-5'>
                <InputOTP
                    maxLength={6}
                    value={onOtp}
                    onChange={(otp) => setOtp(otp)}
                >
                    <div className="flex gap-3">
                        <div>
                            <InputOTPSlot index={0} />
                        </div>
                        <div>
                            <InputOTPSlot index={1} />
                        </div>
                        <div>
                            <InputOTPSlot index={2} />
                        </div>
                        <div>
                            <InputOTPSeparator className='mt-[25%]' />
                        </div>
                        <div>
                            <InputOTPSlot index={3} />
                        </div>
                        <div>
                            <InputOTPSlot index={4} />
                        </div>
                        <div>
                            <InputOTPSlot index={5} />
                        </div>
                    </div>
                </InputOTP>
            </div>
            <div className='flex justify-center'>
                <p>
                    Didn't recieve the code? {' '}
                    <Link href="" className='font-bold'>Resend OTP</Link>
                </p>
            </div>
        </>
    )
}

export default OtpForm