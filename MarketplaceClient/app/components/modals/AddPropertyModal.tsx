'use client'

import Imgae from 'next/image'

import Modal from './Modal'

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'
import Categories from '../addproperty/Categories'
import CustomButton from '../forms/CustomButton'
import { useState } from 'react'

const AddPropertyModal = () => {



    const [currentStep, setCurrentStep] = useState(1)
    const [dataCategory,setDataCategory] = useState('')


    const addPropertyModal = useAddPropertyModal()


    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const content = (
        <>
            {currentStep==1 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Choose Category</h2>
                    
                    <Categories
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />

                    <CustomButton
                        label='Next'
                        onClick={() => setCurrentStep(2)}
                    />
                </> 
            ) : (
                <>step 2</>
            )}

        </>
    )

    return (
        <>
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label='AddProperty'
                content={content}
            />
        </>
    )
}

export default AddPropertyModal