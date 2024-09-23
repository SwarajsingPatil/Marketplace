'use client'
import Modal from "./Modal"
import { useState } from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"

const LoginModal = () => {
const loginModal = useLoginModal()

    const content = (
        <>
            {/* <h2 className="mb-6 text-2xl">Welcome to marketplace, please log in</h2> */}

            <form className="space-y-4" action="">
                <input placeholder="Your email address" type="email" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                
                <input placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl" />
                
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
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal