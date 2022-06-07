import React, { useEffect } from 'react'

const FeatureCard = ({
feature
}) => {
    useEffect(() => {
        console.log(feature)
    })
  return (
    <div className='w-1/3  my-3 px-5 flex-col'>
        <div className='w-full flex justify-center items-center'>
            <p className='w-20 h-20 border-4 border-gray-200 text-blueFF bg-gray-100 text-3xl rounded-full flex items-center justify-center'>{feature.icon}</p>
        </div>
        <div className='bg-white w-full  p-5 pt-16 -mt-10 rounded-lg shadow-sm ' style={{minHeight: '300px'}}>
            <h1 className='font-bold py-2 text-sm text-center w-full pb-4'>{feature.title}</h1>
            <p className='text-xs text-grayB2 leading-relaxed'>{feature.description}</p>
        </div>
    
    </div>
  )
}

export default FeatureCard