const initialState = {
    captchaBase64: '',
    captchaCode: '',
    value: ''
  };
  
  
  export default function captchaState(state = initialState, action) {
    let { type, data } = action;
    switch (type) {
     case 'SET_NEW_CAPTCHA': 
     return data

     case 'SEND_CAPTCHA':
         return initialState
        
  
  
      default:
        return state;
    }
  }
  