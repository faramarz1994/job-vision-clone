import React, { useState } from "react";
import Input from "../../../components/input";
import { userAction } from "../../../redux/actions";
import { connect } from "react-redux";
import Select from "../../../components/select";
import Button from "../../../components/button";

const SetProfileForm = ({ 
    setProfile,
    login
}) => {
  const [profileData, setProfileData] = useState({
    name: '',
    lastname: '',
  });
  return (
    <div className="w-4/5  flex flex-col items-center">
      <p className="text-right text-xs text-black57">
        لطفا برای ادامه ثبت نام اطلاعات زیر را وارد کنید
      </p>

      <div className="w-full flex my-3 items-center justify-center">
      <Input
        placeholder='نام'
        customClass={"w-full mx-4"}
        onChange={(e) => setProfileData({
            ...profileData,
            name: e.target.value
        })}
        value={profileData.name}
      />
      <Input
        placeholder="نام خانوادگی"
        customClass={"w-full mx-4"}
        onChange={(e) =>
            setProfileData({
            ...profileData,
            lastname: e.target.value,
          })
        }
        value={profileData.lastname}
      />
      </div>
        <Button title='تکمیل پروفایل' small onClick={() => {
           
            setProfile(profileData);
            login();
        }}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loginInfo: state.userStates.loginInfo,
  captchaState: state.captchaState,
  familiarityItems: state.publicApi.familiarityItems
});
const mapDispatchToProps = {
  setLoginInfo: userAction.setLoginInfo,
  register: userAction.register,
  setProfile: userAction.setProfile,
  login: userAction.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetProfileForm);
