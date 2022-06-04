import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { publicApi } from "../../redux/actions";
import desktopPrimaryLogo from "../../assets/img/header-logo-primary-desktop.svg";
import { Link } from "react-router-dom";
import FirstStepLoginLayout from "./layouts/firstStep";

import googleLogo from "../../assets/img/google.svg";
import linkedInLogo from "../../assets/img/linkedin.svg";
import SecondStep from "./layouts/SecondStep";
import RegisterLayout from "./layouts/RegisterLayout";
import SetProfile from "./layouts/setProfile";

const Login = ({ headerSettings, setHeaderSettings }) => {
  useEffect(() => {
    setHeaderSettings(headerSettings);
  });

  const [step, setStep] = useState(0);

  const layouts = [
  <FirstStepLoginLayout nextStep={() => setStep(step + 1)} />,
  <SecondStep nextStep={() => setStep(step + 1)} />,
  <RegisterLayout nextStep={() => setStep(step + 1)}/>,
  <SetProfile />
];

  return (
    <div className="bg-grayFA min-h-screen flex flex-col justify-between items-center py-10">
      <Link to="/">
        <img src={desktopPrimaryLogo} />
      </Link>

      <div className="flex flex-col items-center rounded-md shadow-lg bg-white justify-between  pb-6">
        <>
          <div className="w-full bg-blueF2 text-white px-10 py-6 text-center rounded-t-md">
            <h1 className="text-xl font-bold mb-8">ورود / ثبتنام کارجو</h1>
           {
             step !== 2 &&  <p className="text-sm">
             برای ادامه، شماره موبایل یا آدرس ایمیل خود را وارد کنید.
           </p>
           }
            <p className="text-sm">
              با ورود و یا ثبت‌نام در جاب ویژن، قوانین و مقررات جاب ویژن را
              خواهید پذیرفت.
            </p>
          </div>
          <div
            className="w-full h-8 bg-blueF2"
            style={{
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
          ></div>
        </>

        <div className="w-4/5 min-h-40 flex items-center justify-center mt-10 mb-4">
          {layouts[step]}
        </div>
      { step < 2 && <div className="flex items-center w-3/4 justify-between">
        <Link
          to=""
          className="flex w-full mx-1 justify-center items-center ltr p-4 bg-white rounded-xl shadow-md"
        >
          <img src={googleLogo} />
          <p className="font-black text-xs ml-2">ورود و ثبت نام با گوگل</p>
        </Link>
        <Link
          to=""
          className="flex items-center justify-center w-full mx-1 ltr p-4 bg-white rounded-xl shadow-md"
        >
          <img src={linkedInLogo} />
          <p className="font-black text-xs ml-2">ورود و ثبت نام با لینکدین</p>
        </Link>
      </div>}
      </div>

      <Link to="/sys-login">کارفرما هستید؟</Link>
    </div>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setHeaderSettings: publicApi.setHeaderSettings,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
