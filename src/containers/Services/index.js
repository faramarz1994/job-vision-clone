import React from 'react'
import { connect } from 'react-redux'

const Services = ({
    services
}) => {
  return (
    <div className='w-full mt-10 py-16 flex flex-col items-center bg-white'>
        <h1 className='text-black font-black text-center w-full text-xl tracking-tight'>
        خدمات سایت استخدامی جاب ویژن در یک نگاه!
        </h1>
        <div className='flex flex-col w-3/5 mt-8 max-w-7xl'>
            {
                services.map((row, index) => (
                    <div className={`flex items-center py-8 justify-center ${index == 0 && 'ml-60'} ${index == 1 && 'ltr rounded-full rounded-r-none border-4 mx-16 border-gray-100 border-r-0'} 
                    ${index == 2 && ' rounded-full pr-60 border-gray-100 border-l-0 rounded-l-none border-t-0 border-4'}`}>
                        {
                            row.map((item, idx) => (
                                <div className='w-1/2 flex items-end'>
                                    <span className='w-16 h-16 rounded-full shadow-xl bg-gray-600 text-xl flex items-center justify-center text-white relative -bottom-14'>
                                        {item.id}
                                    </span>
                                    <div className=' w-72 bg-white border-gray-100 border mx-4 p-3 rounded-md shadow-sm'>
                                        <h1 className='font-bold mb-1'>{item.title}</h1>
                                        <p className='text-xs text-grayB2'>{item.description}</p>
                                        </div>
                                    </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
    services: state.publicApi.services
})

export default connect(mapStateToProps)(Services);