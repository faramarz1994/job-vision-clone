
const initialState = {
    name: '',
    lastname: '',
    token: '',
    isLogin: false,
  };
  
  
  export default function userStates(state = initialState, action) {
    let { type, data } = action;
    switch (type) {
      case 'LOGIN':
        return {
          ...state,
          isLogin: true
        }
        
  
  
      default:
        return state;
    }
  }
  