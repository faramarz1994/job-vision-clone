import React from 'react'
import Button from '../../../components/button'
import Input from '../../../components/input'

const FirstStepLoginLayout = ({

}) => {
  return (
    <div className='w-full flex flex-col items-center'>
        <Input 
        placeholder='شماره موبایل یا آدرس ایمیل را وارد کنید'
        customClass={'w-2/3 mb-5'}
        />
        <Button title={'ادامه'} to="" small/>

    </div>
  )
}

export default FirstStepLoginLayout