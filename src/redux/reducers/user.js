const initialState = {
  name: "",
  lastname: "",
  phoneNumber: "",
  email: "",
  token: "",
  isLogin: false,
  loginInfo: {
    phoneNumber: "",
    email: "",
    password: "",
    otp: "",
  },
  notification: {
    allowed: false,
    nextTry: 0,
  },
};

export default function userStates(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "LOGIN":
      localStorage.setItem(
        "USER_DATA",
        JSON.stringify({ ...state, isLogin: true })
      );
      return {
        ...state,
        isLogin: true,
      };
    case "SET_LOGIN_INFO":
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          ...data,
        },
      };
    case "REGISTER":
      return {
        ...state,
        ...data,
      };
    case "SET_PROFILE":
      return {
        ...state,
        ...data,
      };
    case "LOAD_USER_DATA":
      return data;

    case "ALLOW_NOTIFICATION":
      if (data == true) {
        localStorage.setItem(
          "USER_DATA",
          JSON.stringify({
            ...state,
            notification: {
              allowed: true,
              nextTry: null,
            },
          })
        );
        return {
          ...state,
          notification: {
            allowed: true,
            nextTry: null,
          },
        };
      } else {
        const date = new Date().getTime() + 1800000;

        localStorage.setItem(
          "USER_DATA",
          JSON.stringify({
            ...state,
            notification: {
              allowed: true,
              nextTry: date,
            },
          })
        );

        return {
          ...state,
          notification: {
            allowed: false,
            nextTry: date,
          },
        };
      }
    default:
      return state;
  }
}
