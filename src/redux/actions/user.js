const userAction = {
    setLoginInfo: (data) => dispatch => {
        dispatch({type: 'SET_LOGIN_INFO', data});
    },
   };
   
   export default userAction;
   