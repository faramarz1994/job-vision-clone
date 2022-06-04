import React, { useState } from 'react'
import Input from '../../../components/input';
import { userAction } from '../../../redux/actions';
import { connect } from 'react-redux';

const RegisterLayout = ({
    loginInfo
}) => {
    const [registerData, setRegisterData] = useState();
  return (
    <div className='w-4/5  flex flex-col items-center'>
        <p className='text-right text-xs text-black57'>حساب کاربری با این آدرس ایمیل وجود ندارد. برای ساخت حساب جدید در جاب ویژن، اطلاعات زیر را کامل کنید.
</p>

<Input 
        placeholder='شماره موبایل یا آدرس ایمیل را وارد کنید'
        customClass={'w-full my-3'}
        onChange={(e) => null}
        value={loginInfo.email.length > 2 ? loginInfo.email : loginInfo.phoneNumber}

        />
        
    </div>
  )
}
const mapStateToProps = state => ({
    loginInfo: state.userStates.loginInfo,
    captchaState: state.captchaState
});
const mapDispatchToProps = {
    setLoginInfo: userAction.setLoginInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterLayout)