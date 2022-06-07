import { toast } from "react-toastify";

const userAction = {
    setLoginInfo: (data) => dispatch => {
        dispatch({type: 'SET_LOGIN_INFO', data});
    },
    register: (data) => dispatch => {
        dispatch({type: 'REGISTER', data});
    },
    setProfile: (data) => dispatch => {
        dispatch({type: 'SET_PROFILE', data});
    },
    login: (data) => dispatch => {
        toast.success('شما با موفقیت وارد شدید!')
        dispatch({type: 'LOGIN', data});
        window.location.replace('/')
    },
    loadUserData: () => dispatch => {
        const data = JSON.parse(localStorage.getItem('USER_DATA'))
        if(data){
            dispatch({type: 'LOAD_USER_DATA', data})
        }
    },
    allowNotification: (data) => dispatch => {
        dispatch({type: 'ALLOW_NOTIFICATION', data});
      }
   };
   
   export default userAction;
   