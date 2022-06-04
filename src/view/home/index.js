import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SolidSearch from '../../components/SolidSearch'
import { publicApi } from '../../redux/actions'

const Home = ({
    headerSettings,
    setHeaderSettings,
    isLogin
}) => {
    useEffect(() => {
        setHeaderSettings(headerSettings);
    })
  return (
    <div className='bg-grayFA min-h-screen flex flex-col items-center'>7

    <div className='w-full h-72 bg-blueF2 mt-12 rounded-b-2xl flex items-center justify-center'>
      <SolidSearch />
    </div>
    {
      isLogin ? 
      <div></div>
      :
      <div>
      </div>
    }
        
    </div>
  )
}
const mapStateToProps = (state) => ({
  isLogin: state.userStates.isLogin
})
const mapDispatchToProps = {
    setHeaderSettings: publicApi.setHeaderSettings
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)