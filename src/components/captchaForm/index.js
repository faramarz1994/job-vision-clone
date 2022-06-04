import React, { useEffect, useState } from 'react'
import Input from '../input'

// assets
import updateIcon from '../../assets/img/update.svg';
import fakeCaptcha from '../../assets/img/fakeCaptcha.jpg';
import { captchaAction } from '../../redux/actions';
import { connect } from 'react-redux';

const CaptchaForm = ({
    width,
    getCaptcha,
    captchaState
}) => {
    const [captchaData, setCaptchaData] = useState(captchaState);

    useEffect(() => {
        getCaptcha();
    }, [])
  return (
    <div className={`${width ? width : 'w-full'} flex items-center justify-between ltr mb-5`}>
        <div className='flex items-center h-full'>
            
            <img src={fakeCaptcha}  className="w-24 ml-2"/>
            <img src={updateIcon} onClick={() => getCaptcha()} className="cursor-pointer"/>
        </div>
        <Input 
        placeholder='عبارت داخل تصویر را وارد کنید'
        customClass={'w-full ml-2 '}
        onChange={(e) => setCaptchaData({...captchaData, value: e.target.value})}
        value={captchaData.value}
        />
    </div>
  )
}
const mapStateToProps = state => ({
    captchaState: state.captchaState
});
const mapDispatchToProps = {
    getCaptcha: captchaAction.getCaptcha
}

export default connect(mapStateToProps, mapDispatchToProps)(CaptchaForm)