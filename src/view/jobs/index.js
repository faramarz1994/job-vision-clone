import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { publicApi } from '../../redux/actions'
import SolidSearch from '../../components/SolidSearch'
import OfferInfo from '../../containers/offerInfo'
import OfferList from '../../containers/offerList'

const Jobs = ({
    headerSettings,
    setHeaderSettings,
    defaultHeaderSettings
}) => {
    useEffect(() => {
        if(defaultHeaderSettings !== headerSettings){
        setHeaderSettings(headerSettings);
        }
    }, [])
  return (
    <div className='bg-grayFA flex flex-col items-center min-h-screen'>
<div className='w-full h-40 bg-blueF2 mt-20 rounded-b-2xl flex items-center justify-center'>
      <SolidSearch />
    </div>

        <div className='w-3/5 max-w-7xl flex items-center mt-8 justify-between p-6 py-4 bg-white rounded-xl shadow'>
            <p className='text-xs tracking-tight'>دریافت جدیدترین آگهی‌های شغلی در ایمیل شما</p>
            <p className=' text-blueF2 font-bold tracking-tighter text-sm'>فعال سازی اطلاع‌رسانی شغلی</p>
        </div>

        <div className='flex justify-center my-6  w-3/5 max-w-7xl'>
            <OfferList />
            <OfferInfo />
        </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
    defaultHeaderSettings: state.publicApi.headerSettings,
})
const mapDispatchToProps = {
    setHeaderSettings: publicApi.setHeaderSettings
}
export default connect(mapStateToProps, mapDispatchToProps)(Jobs)