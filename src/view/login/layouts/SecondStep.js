import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/button'
import CaptchaForm from '../../../components/captchaForm'
import Input from '../../../components/input'
import { captchaAction } from '../../../redux/actions'
import userAction from '../../../redux/actions/user'

const SecondStepLoginLayout = ({
    setLoginInfo,
    nextStep,
    loginInfo,
    sendCaptcha,
    captchaState
}) => {
    const [fsInfo, setFsInfo] = useState(loginInfo.email.length > 2 ? loginInfo.email : loginInfo.phoneNumber)
  return (
    <div className='w-full flex flex-col items-center'>
        <Input 
        placeholder='شماره موبایل یا آدرس ایمیل را وارد کنید'
        customClass={'w-2/3 mb-5'}
        onChange={(e) => setFsInfo(e.target.value)}
        value={fsInfo}

        />
        <CaptchaForm width="w-2/3"/>
        <Button title={'ادامه'} to="" small onClick={() =>{
            if(fsInfo.includes('@')){
               setLoginInfo({email : fsInfo})
            }
            else{
                setLoginInfo({phoneNumber: fsInfo})
            }
            nextStep();
            sendCaptcha(captchaState);
        }}/>

    </div>
  )
}
const mapStateToProps = state => ({
    loginInfo: state.userStates.loginInfo,
    captchaState: state.captchaState
});
const mapDispatchToProps = {
    setLoginInfo: userAction.setLoginInfo,
    sendCaptcha: captchaAction.sendCaptcha,
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondStepLoginLayout)