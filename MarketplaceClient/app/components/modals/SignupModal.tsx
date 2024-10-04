'use client'
import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"
import useSignupModal from "@/app/hooks/useSignUpModal"
import CustomButton from "../forms/CustomButton"

const SignupModal = () => {
    const router = useRouter()
    const signupModal = useSignupModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const content = (
        <>
            {/* <h2 className="mb-6 text-2xl">Welcome to marketplace, please log in</h2> */}

            <form className="space-y-4" action="">
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm password" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                
                {errors.map((error,index) => {
                return(
                    <div 
                        key={`error_${index}`}
                        className="p-5 text-red-700 font-bold rounded-xl opacity-80">
                        {error}
                    </div>
                    )
                })}

                

                <CustomButton
                label="Log in" 
                onClick={() => console.log('test')}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal