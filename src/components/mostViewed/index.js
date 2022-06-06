import React from 'react'
import { connect } from 'react-redux'

const MostViewed = ({
options
}) => {
  return (
    <div className='w-3/5 flex flex-col'>
        <h1 className='text-md tracking-tighter font-black'>پر بازدید ترین ها در جاب ویژن</h1>
        <div className='w-full flex flex-wrap items-center justify-center mt-5'>
            {
                options.map((item, index) => (
                    <p className='px-4 py-2 rounded-full cursor-pointer bg-white m-1 text-xs border border-gray-200'>
                        {item.title}
                    </p>
                ))
            }
        </div>
    </div>
  )
}
const mapStateToProps = state => ({
    options: state.publicApi.mostViewed
})
export default connect(mapStateToProps)(MostViewed)