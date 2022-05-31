
const initialState = {
    name: '',
    lastname: '',
    phoneNumber: '',
    email:'',
    token: '',
    isLogin: false,
    loginInfo:{
      phoneNumber: '',
      email: '',
      password: '',
      otp: '',
    }
  };
  
  
  export default function userStates(state = initialState, action) {
    let { type, data } = action;
    switch (type) {
      case 'LOGIN':
        return {
          ...state,
          isLogin: true
        }
      case 'SET_LOGIN_INFO':
        return{
          ...state,
          loginInfo: {
            ...state.loginInfo,
            ...data
          }
        }  
        
  
  
      default:
        return state;
    }
  }
  