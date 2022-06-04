import { toast } from "react-toastify";

const captchaAction = {
    getCaptcha: () => dispatch => {
        dispatch({type: 'SET_NEW_CAPTCHA', data : {}});
        toast.warn('لطفا بعدا کپچای درست حسابی وارد کنید.');
    },
    sendCaptcha: (data) => dispatch => {
        dispatch({type: 'SEND_CAPTCHA' , data});
    },
   };
   
   export default captchaAction;
   