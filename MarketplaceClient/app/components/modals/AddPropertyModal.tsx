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
    const [dataTitle, setDataTitle] = useState('')
    const [dataDescription, setDataDescription] = useState('')

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
            ) : currentStep == 2 ? (
                <>
                    <h2 className='mb-6 text-2xl'> Describe your place</h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label>Title</label>
                            <input
                                type='text'
                                value={dataTitle}
                                placeholder='Enter title'
                                onChange={(e) => setDataTitle(e.target.value)}
                                className='w-full p-4 shadow shadow-md border border-gray-600 rounded-md'
                            />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Description</label>
                            <textarea
                                value={dataDescription}
                                placeholder='Provide some description about your property'
                                onChange={(e) => setDataDescription(e.target.value)}
                                className='w-full p-4 h-[200px] shadow shadow-md border border-gray-600 rounded-md'
                            ></textarea>
                        </div>
                        
                        <CustomButton
                            label='Previous'
                            className='mb-2 bg-black hover:bg-gray-800'
                            onClick={() => setCurrentStep(1)}
                        />

                        <CustomButton
                            label='Next'
                            onClick={() => setCurrentStep(3)}
                        />

                    </div>

                </>
            ): currentStep==3 ?(
                <>
                    <h2 className='mb-6 text-2xl'>Details</h2>

                    <CustomButton
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(2)}
                    />

                    <CustomButton
                        label='Next'
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : (
                <>
                </>
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