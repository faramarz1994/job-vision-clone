import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import desktopPrimaryLogo from '../../assets/img/header-logo-primary-desktop.svg'
import Button from '../button'

const Header = ({
   headerOptions,
   isLogin,
   headerSettings
 }) => {
  
  return (  headerSettings.shown ? 
    <div className='fixed h-20 bg-white top-0 rounded-b-xl w-full shadow-sm flex items-center justify-center'>
      <div className='flex items-center justify-between w-4/5'>
        <div className='flex items-center'>
          {
            headerOptions.map((item) => (
              <p className='mx-2 text-sm'>{item.title}</p>
            ))
          }
        </div>
        <div className='flex items-center ltr'>
          <img src={desktopPrimaryLogo}  className="pr-4 border-grayF1 border-r-2"/>
          {
            isLogin ? 
            <div></div>
            :
            <>
            <Link to='/employers' className='mx-2 mr-4 text-sm text-gray73'>
          بخش کارفرمایان
          </Link>
          <Button to='/login' title='ورود / ثبتنام کارجو' />
            </>
          }
        </div>
      </div>
    </div>
    :
    null
  )
  
}

const mapStateToProps = state => ({
  headerOptions: state.publicApi.headerOptions,
  isLogin: state.userStates.isLogin,
  headerSettings: state.publicApi.headerSettings,

});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header);