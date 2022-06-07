import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BrandCarousel from '../../components/carousel'
import LockedItem from '../../components/Locked'
import MostViewed from '../../components/mostViewed'
import SolidSearch from '../../components/SolidSearch'
import OurFeatures from '../../containers/ourFeatures'
import Services from '../../containers/Services'
import Stats from '../../containers/stats'
import { publicApi } from '../../redux/actions'

const Home = ({
    headerSettings,
    setHeaderSettings,
    isLogin,
    getCompanies
}) => {
    useEffect(() => {
        setHeaderSettings(headerSettings);
        getCompanies();
    })
  return (
    <div className='bg-grayFA min-h-screen flex flex-col items-center'>7

    <div className='w-full h-60 bg-blueF2 mt-12 rounded-b-2xl flex items-center justify-center'>
      <SolidSearch />
    </div>
    {
      isLogin ? 
      <div></div>
      :
      <div className='w-full flex flex-col mb-64 items-center mt-8'>
        <MostViewed />
        <BrandCarousel />
        <div className='flex w-3/5 px-6 mt-10 items-center justify-center'>
          <LockedItem title='فرصت شغلی های پیشنهادی' className={`ml-10`}/>
          <LockedItem title='رزومه های ارسالی' className={`mr-10`}/>
          </div>
          <Stats />
          <Services />
          <OurFeatures />
      </div>
    }
        
    </div>
  )
}
const mapStateToProps = (state) => ({
  isLogin: state.userStates.isLogin
})
const mapDispatchToProps = {
    setHeaderSettings: publicApi.setHeaderSettings,
    getCompanies: publicApi.getCompanies,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)