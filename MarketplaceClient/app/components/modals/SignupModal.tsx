'use client'
import Modal from "./Modal"
import { useState } from "react"
import useSignupModal from "@/app/hooks/useSignUpModal"
import CustomButton from "../forms/CustomButton"

const SignupModal = () => {
const signupModal = useSignupModal()

    const content = (
        <>
            {/* <h2 className="mb-6 text-2xl">Welcome to marketplace, please log in</h2> */}

            <form className="space-y-4" action="">
                <input placeholder="Your email address" type="email" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                
                <input placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                <input placeholder="Confirm password" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                
                <div className="p-5 text-red-700 rounded-xl opacity-80">
                    yooo
                </div>

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